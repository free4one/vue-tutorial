<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AppLayout',
};
</script>

<style scoped>
.container {
  border: 1px solid blue;
}
header {
  border: 1px solid red;
  background-color: #cccccc;
}
main {
  border: 1px solid green;
  background-color: #259603;
}
footer {
  border: 1px solid violet;
  background-color: #7c0172;
  color: #ffffff;
}
</style>
