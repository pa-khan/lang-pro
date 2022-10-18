<template>
  <Main>
    <Breadcrumb />
    <Cat />
  </Main>
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