<template>
  <Main>
    <Login />
  </Main>
</template>
<script>
export default {
  head: {
    title: 'Вход в кабинет'
  },
  setup() {
    definePageMeta({
      // layout: 'auth',
      title: 'Вход в кабинет'
    });
  }
}
</script>
<style lang="scss">
// .header,
// .footer {
//   display: none;
// }
</style>