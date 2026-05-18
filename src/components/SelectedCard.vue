<script lang="ts">
import Tag from "@/components/Tag.vue";

export default {
  components: {
    Tag
  },
  props: {
    ingredient: {type: String, required: true}
  },
  data() {
    return {
      selected: false
    }
  },
  methods: {
    itemSelected() {
      this.selected = !this.selected

      if (this.selected) {
        this.$emit('addIngredient', this.ingredient);
      } else {
        this.$emit('removeIngredient', this.ingredient)
      }
    }
  },
  emits: ['addIngredient', 'removeIngredient']
}
</script>
<template>
  <button class="ingredient" @click="itemSelected" :aria-pressed="selected">
    <Tag :text="ingredient" :active="selected"/>
  </button>
</template>

<style scoped>
.ingredient {
  cursor: pointer;
}
</style>