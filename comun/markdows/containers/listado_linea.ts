import type MarkdownIt from 'markdown-it'
import { crearContainer } from '../crearContainer'

export function registrarListado(md: MarkdownIt) {
    crearContainer(md, {
        nombre: 'listado',
        titulo: 'Estructuras de control',
        icono: 'fa-solid fa-code-branch'
    })
}