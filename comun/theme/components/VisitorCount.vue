<script setup lang="ts">
defineProps<{
  total?: string | number | null
  visible?: boolean
}>()
</script>

<template>
  <p v-if="visible !== false" class="visit-counter">
    👁 Visitas: <strong>{{ total || '…' }}</strong>
  </p>
</template>

<style scoped>
.visit-counter {
  width: 100%;
  margin: 0;
  padding: 1.15rem 1rem 1.6rem;
  border-top: 1px solid var(--vp-c-gutter);
  background: var(--vp-c-bg-alt);
  text-align: center;
  font-size: 0.95rem;
  font-weight: 650;
  letter-spacing: 0.02em;
}

.visit-counter strong {
  font-variant-numeric: tabular-nums;
}
</style>
