<template>
  <Breadcrumb />
  <Title value="Курсы" />
  <Cat />
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