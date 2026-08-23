# ============================================================================
# Practica de matematicas — comandos de desarrollo
# Ejecutar dentro de WSL:  make <target>
# ============================================================================

# Nivel mínimo de severidad para la auditoría en CI (low, moderate, high, critical)
AUDIT_LEVEL ?= high

.PHONY: install typecheck lint format-check audit build ci format check security security-fix dev deploy

# ============================================================================
# Targets para CI (GitHub Actions)
# ============================================================================

# Instala dependencias de forma reproducible usando package-lock.json
install:
	npm ci

# Verificación de tipos (TypeScript) — paso independiente en el workflow
typecheck:
	npm run typecheck

# Lint con ESLint — paso independiente en el workflow
lint:
	npx eslint . --ignore-pattern 'out/' --ignore-pattern 'node_modules/' --format stylish

# Verifica formato Prettier sin modificar archivos — paso independiente
format-check:
	npm run format:check

# Auditoría de seguridad; falla si hay vulnerabilidades >= AUDIT_LEVEL
audit:
	npm audit --audit-level=$(AUDIT_LEVEL)

# Verifica que el export estático generó la salida esperada en out/
build-verify:
	@test -f out/index.html || { echo "ERROR: build estático no generó out/index.html"; exit 1; }

# Pipeline completo de CI: instalar + verificar + auditar + compilar.
# Uso en GitHub Actions:  - run: make ci
ci: install
	$(MAKE) typecheck
	$(MAKE) lint
	$(MAKE) format-check
	$(MAKE) audit AUDIT_LEVEL=$(AUDIT_LEVEL)
	$(MAKE) build
	$(MAKE) build-verify

# Compila el sitio estático en out/
build:
	npm run build

# Formatea el código con Prettier
format:
	npm run format

# Verifica lint, tipos y formato
check:
	npm run typecheck
	npx eslint . --ignore-pattern 'out/' --ignore-pattern 'node_modules/' --format stylish
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
