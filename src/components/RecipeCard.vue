<script lang="ts">
import type {PropType} from "vue";
import type ICategory from "@/interfaces/ICategory";
import SelectedCard from "@/components/SelectedCard.vue";

export default {
  components: {
    SelectedCard
  },
  props: {
    recipe: {type: Object as PropType<ICategory>, required: true}
  }
}
</script>

<template>
  <article class="recipe-card">

    <img
        :src="`/images/recipes/${recipe.imagem}`"
        :alt="recipe.nome"
        class="recipe-card__image"
    >

    <div class="recipe-card__content">
      <h2 class="recipe-card__title">
        {{ recipe.nome }}
      </h2>
    </div>

  </article>
</template>

<style scoped>
.recipe-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
      0 4px 12px rgba(0,0,0,.08);
  transition:
      transform .2s ease,
      box-shadow .2s ease;
  cursor: pointer;
}

.recipe-card:hover {
  transform: translateY(-4px);
  box-shadow:
      0 12px 24px rgba(0,0,0,.12);
}

.recipe-card__image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  display: block;
}

.recipe-card__content {
  padding: 1rem;
}

.recipe-card__title {
  text-align: center;
  color: var(--verde-escuro);
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.4;
}
</style>