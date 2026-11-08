
#!/usr/bin/env bash
set -euo pipefail

# Directorio donde está arquitectura-apuntes
RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PLANTILLA="$RAIZ/plantilla"

if [ $# -ne 1 ]; then
    echo "Uso: $0 nombre-proyecto"
    exit 1
fi

NOMBRE="$1"

# Los proyectos se crean junto a arquitectura-apuntes
DESTINO="$(dirname "$RAIZ")/$NOMBRE"

if [ -e "$DESTINO" ]; then
    echo "ERROR: El proyecto ya existe: $DESTINO"
    exit 1
fi

if [ ! -f "$PLANTILLA/.vitepress/config.mts" ]; then
    echo "ERROR: Falta config.mts en la plantilla"
    exit 1
fi

echo "Creando proyecto $NOMBRE..."

mkdir -p "$DESTINO/docs"

# Copiar toda la infraestructura
cp -a "$PLANTILLA/.vitepress" "$DESTINO/docs/"
cp "$PLANTILLA/package.json" "$DESTINO/"

# Crear página inicial
cat > "$DESTINO/docs/index.md" <<EOF
---
title: $NOMBRE
---

# $NOMBRE

Bienvenido a los apuntes.
EOF

cd "$DESTINO"

# Personalizar el nombre del paquete
npm pkg set "name=$NOMBRE"

# Instalar dependencias
npm install

echo ""
echo "Proyecto creado correctamente."
echo "Ruta: $DESTINO"
echo ""
echo "Para iniciarlo:"
echo "cd $DESTINO"
echo "npm run docs:dev"
