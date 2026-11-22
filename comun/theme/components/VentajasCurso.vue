<script setup>
defineProps({
  ventajas: { type: Array, required: true }
})
</script>

<template>
  <section class="advantages">
    <div v-for="item in ventajas" :key="item.title" class="advantage">
      <i :class="item.icon" aria-hidden="true"></i>
      <span>{{ item.title }}</span>
    </div>
  </section>
</template>
