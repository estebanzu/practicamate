# ============================================================================
# Practica de matematicas — comandos de desarrollo
# Ejecutar dentro de WSL:  make <target>
# ============================================================================

# Nivel mínimo de severidad para la auditoría en CI (low, moderate, high, critical)
AUDIT_LEVEL ?= high

# Presupuesto máximo del JS de chunks en KB gzip (hoy ~316 KB)
BUDGET_JS_KB ?= 400

.PHONY: install typecheck lint format-check audit build ci format check security security-fix dev deploy \
	check-routes check-links check-secrets playwright-install smoke size-budget outdated

# ============================================================================
# Targets para CI (GitHub Actions)
# ============================================================================

# Instala dependencias de forma reproducible usando package-lock.json
install:
	npm ci

# Verificación de tipos (TypeScript) — paso independiente en el workflow
typecheck:
	npm run typecheck

# Lint con ESLint (config en eslint.config.mjs) — paso independiente
lint:
	npx eslint .

# Verifica formato Prettier sin modificar archivos — paso independiente
format-check:
	npm run format:check

# Auditoría de seguridad; falla si hay vulnerabilidades >= AUDIT_LEVEL
audit:
	npm audit --audit-level=$(AUDIT_LEVEL)

# Verifica que el export estático generó la salida esperada en out/
build-verify:
	@test -f out/index.html || { echo "ERROR: build estático no generó out/index.html"; exit 1; }

# ----------------------------------------------------------------------------
# Checks adicionales para sitio estático
# ----------------------------------------------------------------------------

# Cada práctica del dataset debe tener teoría y ejercicios en out/ (y sin carpetas obsoletas)
check-routes:
	npx --yes tsx scripts/check-routes.ts

# Detecta enlaces internos rotos en los HTML de out/ (ignora enlaces externos).
# Se pasa archivo por archivo porque el modo directorio de linkinator no crawlea.
check-links:
	@status=0; total=0; \
	for f in $$(find out -name '*.html' | sort); do \
		total=$$((total + 1)); \
		salida=$$(npx --yes linkinator "$$f" --skip '^https?://' 2>&1) || { echo "$$salida"; echo "ERROR: enlaces rotos en $$f"; status=1; }; \
	done; \
	echo "Revisados $$total archivos HTML"; \
	exit $$status

# Escanea secretos (tokens, llaves) con gitleaks. Si no está instalado,
# avisa y continúa: en CI lo aplica gitleaks/gitleaks-action en el workflow.
check-secrets:
	@if command -v gitleaks >/dev/null 2>&1; then \
		gitleaks detect --no-git -v; \
	else \
		echo "AVISO: gitleaks no instalado; check omitido (brew install gitleaks)"; \
	fi

# Presupuesto de tamaño: falla si el JS de chunks supera BUDGET_JS_KB en gzip
size-budget:
	@total=$$(find out/_next/static/chunks -name '*.js' -exec gzip -c {} + | wc -c | awk '{print int($$1/1024)}'); \
	echo "JS de chunks: $${total} KB gzip (presupuesto $(BUDGET_JS_KB) KB)"; \
	test $$total -le $(BUDGET_JS_KB)

# Instala el navegador de Playwright (idempotente, con caché)
playwright-install:
	npx playwright install chromium

# Smoke test E2E sobre el export estático en out/
smoke: playwright-install
	npx playwright test

# Reporte informativo de dependencias obsoletas (no bloquea)
outdated:
	-npm outdated

# Pipeline completo de CI: instalar + verificar + auditar + compilar + checks.
# Uso en GitHub Actions:  - run: make ci
ci: install
	$(MAKE) check-secrets
	$(MAKE) typecheck
	$(MAKE) lint
	$(MAKE) format-check
	$(MAKE) audit AUDIT_LEVEL=$(AUDIT_LEVEL)
	$(MAKE) build
	$(MAKE) build-verify
	$(MAKE) check-routes
	$(MAKE) check-links
	$(MAKE) size-budget
	$(MAKE) smoke

# Compila el sitio estático en out/
build:
	npm run build

# Formatea el código con Prettier
format:
	npm run format

# Verifica lint, tipos y formato
check:
	npm run typecheck
	npx eslint .
	npm run format:check

# Auditoría de seguridad de dependencias (npm audit)
security:
	npm run security

# Corrige vulnerabilidades forzando la actualización (npm audit fix --force)
# Nota: "make security --fix-force" no es válido en GNU Make (los flags tras el
# target se interpretan como opciones), por qué se usa este target dedicado.
security-fix:
	npm run security:fix

# Servidor de desarrollo
dev:
	npm run dev

# Token de Vercel: variable de entorno o archivo .env (ignorado por git)
VERCEL_TOKEN ?= $(shell test -f .env && sed -n 's/^VERCEL_TOKEN=//p' .env | head -1)

# Despliega la app en Vercel (producción). Requiere VERCEL_TOKEN:
#   export VERCEL_TOKEN=vcp_xxx   o   echo "VERCEL_TOKEN=vcp_xxx" > .env
deploy:
	@test -n "$(VERCEL_TOKEN)" || { echo "ERROR: falta VERCEL_TOKEN (export VERCEL_TOKEN=... o crea .env)"; exit 1; }
	@npx --yes vercel link --yes --project novenomate --token "$(VERCEL_TOKEN)"
	npx --yes vercel deploy --prod --yes --token "$(VERCEL_TOKEN)"
