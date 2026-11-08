
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Arquitectura de Apuntes',
  description: 'Documentación y organización de proyectos docentes',
  lang: 'es-ES',

  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Arquitectura', link: '/arquitectura/' },
      { text: 'Guías', link: '/guias/inicializar_proyecto_vitepress' }
    ],

    sidebar: [
      {
        text: 'Arquitectura',
        items: [
          { text: 'Visión general', link: '/arquitectura/' },
          { text: 'Componentes Vue', link: '/arquitectura/componentes' },
          { text: 'Contenedores Markdown', link: '/arquitectura/containers' },
          { text: 'Estilos CSS', link: '/arquitectura/estilos' }
        ]
      },
      {
        text: 'Guías',
        items: [
          {
            text: 'Inicializar proyecto VitePress',
            link: '/guias/inicializar_proyecto_vitepress'
          }
        ]
      }
    ],

    outline: 'deep',

    search: {
      provider: 'local'
    }
  }
})
