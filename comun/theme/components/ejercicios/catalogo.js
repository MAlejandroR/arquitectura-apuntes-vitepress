
/**
 * Catálogo común de ejercicios.
 *
 * Recibe los módulos Markdown detectados por VitePress.
 * No depende de ningún curso concreto.
 */
export function crearCatalogo(archivos) {
    const ejercicios = new Map()

    for (const [ruta, modulo] of Object.entries(archivos)) {
        const datos = modulo.__pageData
        if (!datos) continue

        const {
            id,
            titulo,
            tema,
            subtema,
            orden
        } = datos.frontmatter

        if (!id) continue

        if (ejercicios.has(id)) {
            throw new Error(
                `Identificador duplicado: ${id} (${ruta})`
            )
        }

        ejercicios.set(id, {
            id,
            titulo,
            tema,
            subtema: subtema ?? null,
            orden,
            ruta,
            icon: datos.frontmatter.icon || 'fa-solid fa-code',
            url: datos.relativePath,
            componente: modulo.default,
            solucion: datos.frontmatter.solucion ?? null,
            mostrarCodigo: datos.frontmatter.mostrar_codigo ?? false
        })
    }

    function obtenerEjercicio(id) {
        return ejercicios.get(id)
    }

    function obtenerEjercicios(tema = null, subtema = null) {
        return [...ejercicios.values()]
            .filter(e =>
                (!tema || e.tema === tema) &&
                (!subtema || e.subtema === subtema)
            )
            .sort((a, b) =>
                Number(a.orden) - Number(b.orden)
            )
    }

    function obtenerTemas() {
        return [...new Set(
            [...ejercicios.values()]
                .map(e => e.tema)
                .filter(Boolean)
        )].sort()
    }

    function obtenerSubtemas(tema = null) {
        return [...new Set(
            obtenerEjercicios(tema)
                .map(e => e.subtema)
                .filter(Boolean)
        )].sort()
    }

    return {
        obtenerEjercicio,
        obtenerEjercicios,
        obtenerTemas,
        obtenerSubtemas
    }
}
