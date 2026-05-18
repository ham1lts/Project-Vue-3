<script lang="ts">
  export default {
    props: {
      text: String,
      buttonClass: { type: Array, default: ['primary']}
    }
  }
</script>

<template>
  <button :class="buttonClass" >
    {{ text }}
  </button>
</template>

<style scoped>
.primary {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 40px;
  min-height: 56px;
  border: none;
  border-radius: 999px;
  font-size: 25px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
  background: var(--coral);
  color: var(--branco);;
}
</style>