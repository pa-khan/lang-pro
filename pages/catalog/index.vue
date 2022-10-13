<template>
  <main class="main">
    <Breadcrumb />
    <Title value="Курсы" />
    <Cat />
  </main>
</template>
<script>
export default {
  head: {
    title: 'Курсы'
  },
  setup() {
    definePageMeta({
      title: 'Курсы'
    });
  }
}
</script>