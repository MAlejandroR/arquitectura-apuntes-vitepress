
import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'
import { dawsContainers } from './markdows'
import footnote from 'markdown-it-footnote'

export default withMermaid(
    defineConfig({
        lang: 'es-ES',
        title: 'Apuntes',
        description: 'Materiales docentes',

        markdown: {
            lineNumbers: true,

            config(md) {
                dawsContainers(md)
                md.use(footnote)
            },

            toc: {
                level: [1, 2, 3, 4]
            }
        },

        mermaid: {
            theme: 'default',
            securityLevel: 'loose'
        },

        themeConfig: {
            nav: [
                { text: 'Inicio', link: '/' }
            ],

            sidebar: [],

            outline: 'deep',

            search: {
                provider: 'local'
            }
        }
    })
)
