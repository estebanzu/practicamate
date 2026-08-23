# ============================================================================
# Practica de matematicas — comandos de desarrollo
# Ejecutar dentro de WSL:  make <target>
# ============================================================================

.PHONY: build format check security security-fix dev deploy

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
