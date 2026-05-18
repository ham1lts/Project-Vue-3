<script lang="ts">

import CategoryCard from "@/components/CategoryCard.vue";
import type ICategory from "@/interfaces/ICategory";
import {getCategories} from "@/http/index";
import SelectedCard from "@/components/SelectedCard.vue";
import Button from "@/components/Button.vue";

export default {
  name: 'IngredientSelection',
  components: {
    Button,
    SelectedCard,
    CategoryCard
  },
  data() {
    return {
      categories: [] as ICategory[] //Add alias
    }
  },
  async created() {
    this.categories = await getCategories();
  },
  emits: ['addIngredient', 'removeIngredient', 'findRecips']
}
</script>

<template>
  <section class="ingredients-selection">
    <h1 class="header ingredients-title">
      Ingredientes
    </h1>

    <p class="paragraph-lg instructions">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="categories">
      <li v-for="category in categories" :key="category.nome">
        <CategoryCard :category="category" @addIngredient="$emit('addIngredient', $event)"
                      @removeIngredient="$emit('removeIngredient', $event)"/>
      </li>
    </ul>

    <p class="paragraph tip">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>
    <Button text="Buscar Ingredientes" @click="$emit('findRecips')"/>
  </section>
</template>

<style scoped>
.ingredients-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ingredients-title {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instructions {
  margin-bottom: 2rem;
}

.categories {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tip {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .tip {
    margin-bottom: 2.5rem;
  }
}

</style>