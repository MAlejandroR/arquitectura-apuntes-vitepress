<script setup>
defineProps({
  salidas: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div id="salidas-profesionales" class="career-content">
    <span class="section-kicker">SALIDAS PROFESIONALES</span>
    <h2>Un sector con futuro</h2>
    <ul>
      <li v-for="salida in salidas" :key="salida">
        <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
        {{ salida }}
      </li>
    </ul>
    <slot name="imagen" />
  </div>
</template>
