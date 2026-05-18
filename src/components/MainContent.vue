<script lang="ts">
import IngredientSelection from "@/components/IngredientSelection.vue";
import Tag from "@/components/Tag.vue";
import YourList from "@/components/YourList.vue";
import Button from "@/components/Button.vue";
import Footer from "@/components/Footer.vue";
import ShowRecipes from "@/components/ShowRecipes.vue";

type Page = 'ShowIngredients' | 'ShowRecipes';

export default {
  components: {
    ShowRecipes,
    Footer,
    Button,
    YourList,
    Tag,
    IngredientSelection
  },
  data() {
    return {
      ingredients: [] as string[],
      content: 'ShowIngredients' as Page
    }
  },
  methods: {
    addIngredient(ingredient: string) {
      if (!this.ingredients.includes(ingredient)) {
        this.ingredients.push(ingredient)
      }
    },
    removeIngredient(ingredient: string) {
      this.ingredients = this.ingredients.filter(item => item !== ingredient)
    },
    navegar(page: Page) {
      this.content = page;
    }
  }
}
</script>

<template>
  <main class="main-content">
    <YourList :ingredients="ingredients"/>
    <KeepAlive include="IngredientSelection">
      <IngredientSelection v-if="content === 'ShowIngredients'"
                           @addIngredient="addIngredient"
                           @removeIngredient="removeIngredient"
                           @findRecips="navegar('ShowRecipes')"
      />
      <ShowRecipes v-else-if="content === 'ShowRecipes'"
                   :ingredients="ingredients"
                   @changeIngredients="navegar('ShowIngredients')"/>
    </KeepAlive>
  </main>
  <Footer/>
</template>
<style scoped>
.main-content {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .main-content {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .main-content {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}

</style>