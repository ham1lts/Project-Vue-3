<script lang="ts">
import Banner from "./components/Banner.vue";
import MainContent from "@/components/MainContent.vue";

export default {
  components: {
    MainContent,
    Banner: Banner
  }
}
</script>
<template>
  <Banner />
  <MainContent />
</template>

