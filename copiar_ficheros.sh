
#!/usr/bin/env bash
set -euo pipefail

DAWS="$HOME/0_servidor-vitepress"

# Directorio donde se encuentra este script
RAIZ="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DESTINO="$RAIZ/plantilla"

echo "Origen: $DAWS"
echo "Destino: $DESTINO"

if [ ! -d "$DAWS/docs/.vitepress" ]; then
    echo "ERROR: No existe el proyecto DAWS"
    exit 1
fi

mkdir -p "$DESTINO/.vitepress"

echo "Copiando contenedores..."
cp -av "$DAWS/docs/.vitepress/markdows" "$DESTINO/.vitepress/"

echo "Copiando componentes y estilos..."
cp -av "$DAWS/docs/.vitepress/theme" "$DESTINO/.vitepress/"

echo "Copiando package.json..."
cp -v "$DAWS/package.json" "$DESTINO/package.json"

echo "Plantilla copiada correctamente."
