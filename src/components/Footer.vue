<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__text">
        Desenvolvido por Hamilton | 2026 - Projeto Inicial Vue.
      </p>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  background: #0f2d1c;
  padding: 24px 16px;
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
}

.footer__text {
  color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;

  opacity: 0.9;
}
</style>