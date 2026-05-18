<script lang="ts">

import {getRecipes} from "@/http/index";
import {verifyCommomItems} from "@/operations/utility";
import type IRecipe from "@/interfaces/IRecipe";
import RecipeCard from "@/components/RecipeCard.vue";
import Button from "@/components/Button.vue";
import type {PropType} from "vue";

export default {
  components: {
    Button,
    RecipeCard
  },

  data() {
    return {
      recipes: [] as IRecipe[]
    }
  },
  props: {
    ingredients: {type: Array, required: true}
  },
  async created() {
    const allRecipes = await getRecipes();
    this.recipes = allRecipes.filter((recipe) => {
      const possoFazer = verifyCommomItems(recipe.ingredientes, this.ingredients);
      return possoFazer;
    })
  },
  emits: ['changeIngredients']
}
</script>
<template>
  <section class="recipes-selection">
    <h1 class="header recipes-title">Receitas</h1>

    <p class="recipes-title">
      Resultados encontrados: {{ recipes.length }}
    </p>
    <template v-if="recipes.length">
      <p class="paragraph-lg instructions" v-if="recipes.length">
        Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
      </p>

      <ul class="recipes" v-if="recipes.length">
        <li v-for="recipe in recipes" :key="recipe.nome">
          <RecipeCard :recipe="recipe"/>
        </li>
      </ul>
    </template>
    <template v-else>
      <p class="paragraph-lg instructions">Ops, não encontramos o resultado da sua combinação. Vamos tentar de novo?</p>
      <img src="../assets/images/sem-receitas.png" alt="Sem receitas para os ingredientes">
    </template>

    <Button text="Editar Lista" @click="$emit('changeIngredients')"/>
  </section>
</template>
<style scoped>
.recipes-selection {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipes-title {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instructions {
  margin-bottom: 2rem;
}

.recipes {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
</style>