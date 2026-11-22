
<script setup>
import { withBase } from 'vitepress'

defineProps({
  contenidos: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="indice-curso">
    <a
        v-for="item in contenidos"
        :key="item.numero"
        :href="withBase(item.enlace)"
        class="curso-tarjeta"
    >
      <div class="curso-cabecera">
        <i :class="item.icono"></i>
        <span class="curso-numero">{{ item.numero }}</span>
      </div>

      <h2>{{ item.titulo }}</h2>
      <p>{{ item.descripcion }}</p>

      <span class="curso-enlace">
        Explorar contenido <span aria-hidden="true">→</span>
      </span>
    </a>
  </div>
</template>



<style scoped>
.indice-curso {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  max-width: 1000px;
  margin: 24px auto;
  padding: 24px;
  border-radius: 20px;
}

.dark .curso-tarjeta {
  background: rgba(30, 30, 40, 0.85);
}
.curso-tarjeta {
  display: flex;
  flex-direction: column;
  padding: 22px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: transform .2s, box-shadow .2s, border-color .2s;
}

.curso-tarjeta:hover {
  transform: translateY(-4px);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.07);
}

.curso-cabecera {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.curso-cabecera i {
  font-size: 23px;
  color: var(--vp-c-brand-1);
}

.curso-numero {
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-text-3);
}

.curso-tarjeta h2 {
  margin: 12px 0 6px;
  padding: 0;
  border: none;
  font-size: 17px;
  line-height: 1.3;
}

.curso-tarjeta p {
  flex: 1;
  margin: 0 0 12px;
  color: var(--vp-c-text-2);
  font-size: 13px;
  line-height: 1.4;
}

.curso-enlace {
  font-size: 12px;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

@media (max-width: 800px) {
  .indice-curso {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 520px) {
  .indice-curso {
    grid-template-columns: 1fr;
  }
}
</style>

