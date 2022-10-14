<template>
  <main class="main">
    <Breadcrumb />
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