<script setup>
defineProps({
  datos: { type: Array, required: true }
})
</script>

<template>
  <section class="course-facts">
    <div v-for="item in datos" :key="item.label" class="fact">
      <i :class="item.icon" aria-hidden="true"></i>
      <div>
        <small>{{ item.label }}</small>
        <strong>{{ item.value }}</strong>
      </div>
    </div>
  </section>
</template>
