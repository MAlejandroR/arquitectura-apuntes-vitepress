
<script setup>
import { computed, inject } from 'vue'
import { withBase } from 'vitepress'

import Ejercicio from './Ejercicio.vue'
const { obtenerEjercicios } = inject('catalogoEjercicios', {
  obtenerEjercicios: () => []
})

const props = defineProps({
  tema: {
    type: String,
    default: null
  },
  subtema: {
    type: String,
    default: null
  },
  modo: {
    type: String,
    default: 'lista'
  }
})

// Filtramos y ordenamos desde el catálogo
const ejercicios = computed(() =>
    obtenerEjercicios(props.tema, props.subtema)
)

// Construimos la URL pública del ejercicio.
// La ruta puede estar afectada por los rewrites de VitePress.
function urlEjercicio(ejercicio) {
  const ruta = ejercicio.url.replace(/(^|\/)index\.md$/, '$1')
  return withBase('/' + ruta)
}
</script>

<template>
  <div class="lista-ejercicios">

    <p v-if="ejercicios.length === 0" class="sin-ejercicios">
      No hay ejercicios para los filtros seleccionados.
    </p>

    <!-- Modo lista: enlaces compactos -->
    <ul v-else-if="modo === 'lista'" class="ejercicios-enlaces">
      <li v-for="ejercicio in ejercicios" :key="ejercicio.id">
        <a :href="urlEjercicio(ejercicio)">
          <i :class="ejercicio.icon" aria-hidden="true"></i>
          <span>
            Ejercicio {{ ejercicio.orden }}:
            {{ ejercicio.titulo }}
          </span>
        </a>
      </li>
    </ul>

    <!-- Modo completo: ejercicios desplegables -->
    <div v-else-if="modo === 'completo'" class="ejercicios-completos">
      <Ejercicio
          v-for="ejercicio in ejercicios"
          :key="ejercicio.id"
          :id="ejercicio.id"
      />
    </div>

    <p v-else>
      Modo de visualización no válido: {{ modo }}
    </p>

  </div>
</template>

<style scoped>
.ejercicios-enlaces {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ejercicios-enlaces li {
  margin: 0;
  padding: 0;
}

.ejercicios-enlaces a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.ejercicios-enlaces a:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
}

.ejercicios-enlaces i {
  color: var(--vp-c-brand-1);
  width: 20px;
  text-align: center;
}

.ejercicios-completos {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sin-ejercicios {
  color: var(--vp-c-text-2);
  font-style: italic;
}
</style>
