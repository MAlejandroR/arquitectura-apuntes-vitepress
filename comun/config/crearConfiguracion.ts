
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import footnote from 'markdown-it-footnote'
import { fileURLToPath } from 'node:url'
import { dawsContainers } from '../markdows'
import {createRequire} from 'node:module'

export function crearConfiguracion({
                                       configUrl,
                                       title = 'Apuntes',
                                       description = 'Materiales docentes',
                                       nav = [],
                                       sidebar = {},
                                       rewrites = {},
                                       opcionesVite = {},
                                       opcionesMarkdown = {},
                                       opcionesTema = {},
                                       ...opciones                                   }) {
    // Directorio raíz del proyecto que utiliza esta configuración
    const proyecto = fileURLToPath(new URL('../../../', configUrl))
    // Directorio raíz de la infraestructura compartida
    const arquitectura = fileURLToPath(new URL('../../', import.meta.url))

    const requireProyecto = createRequire(configUrl)
    const rutaVue = requireProyecto.resolve('vue');

    const {
        config: configurarMarkdown,
        ...otrasOpcionesMarkdown
    } = opcionesMarkdown;

    return withMermaid(
        defineConfig({
            ...opciones,

            lang: 'es-ES',
            title,
            description,


            vite: {
                ...opcionesVite,

                resolve: {
                    ...opcionesVite.resolve,

                    alias: [
                        ...(Array.isArray(opcionesVite.resolve?.alias)
                            ? opcionesVite.resolve.alias
                            : []),
                        {
                            find: /^vue$/,
                            replacement: rutaVue
                        }
                    ],

                    dedupe: [
                        ...new Set([
                            ...(opcionesVite.resolve?.dedupe ?? []),
                            'vue'
                        ])
                    ]
                },

                server: {
                    ...opcionesVite.server,
                    fs: {
                        ...opcionesVite.server?.fs,
                        allow: [
                            proyecto,
                            arquitectura,
                            ...(opcionesVite.server?.fs?.allow ?? [])
                        ]
                    }
                },

                optimizeDeps: {
                    ...opcionesVite.optimizeDeps,
                    include: [
                        ...new Set([
                            'fastdom',
                            ...(opcionesVite.optimizeDeps?.include ?? [])
                        ])
                    ]
                }
            },


            markdown: {
                lineNumbers: true,

                toc: {
                    level: [1, 2, 3, 4]
                },

                ...otrasOpcionesMarkdown,

                config(md, env) {
                    dawsContainers(md)
                    md.use(footnote)

                    configurarMarkdown?.(md, env)
                }
            },


            mermaid: {
                theme: 'default',
                securityLevel: 'loose'
            },

            rewrites,

            themeConfig: {
                nav,
                sidebar,
                outline: "deep",

                search: {
                    provider: 'local'
                },
                ...opcionesTema
            }
        })
    )
}
