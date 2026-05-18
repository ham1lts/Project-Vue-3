<script lang="ts">
import Tag from "@/components/Tag.vue";

export default {
  components: {
    Tag
  },
  props: {
    ingredients: {type: Array, required: true}
  }
}
</script>
<template>
  <section>
<span class="subtitle-lg text-list">
        Sua lista:
      </span>
    <ul v-if="ingredients.length" class="ingredients-your-list">
      <li v-for="ingredient in ingredients"
          v-bind:key="ingredient">
        <Tag :text="ingredient" :active="true"/>
      </li>
    </ul>
    <p v-else class="paragraph empty-list">
      <img src="../assets/images/icons/lista-vazia.svg" alt="Empty List Icon">
      Sua lista está vazia, selecione ingredientes para iniciar.
    </p>
  </section>
</template>

<style scoped>
.text-list {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredients-your-list {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.empty-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}
</style>
