# ============================================================================
# Matemática en foco — comandos de desarrollo
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
	npm run lint
	npm run typecheck
	npm run format:check

# Auditoría de seguridad de dependencias (npm audit)
security:
	npm run security

# Corrige vulnerabilidades forzando la actualización (npm audit fix --force)
# Nota: "make security --fix-force" no es válido en GNU Make (los flags tras el
# target se interpretan como opciones), por eso se usa este target dedicado.
security-fix:
	npm run security:fix

# Servidor de desarrollo
dev:
	npm run dev

# Despliegue (pendiente de implementación)
deploy:
	@echo "El target 'deploy' se implementará más adelante."