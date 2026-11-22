<script setup>
defineProps({
  tecnologias: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div id="tecnologias" class="course-technologies">
    <span class="section-kicker">TECNOLOGÍAS</span>
    <div class="tech-grid">
      <a
        v-for="tech in tecnologias"
        :key="tech.name"
        :href="tech.url"
        class="tech-card"
        target="_blank"
        rel="noopener noreferrer"
        :title="`Visitar la web de ${tech.name}`"
      >
        <i :class="tech.icon" aria-hidden="true"></i>
        <span>{{ tech.name }}</span>
      </a>
    </div>
  </div>
</template>
