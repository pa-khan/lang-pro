<template>
  <Main>
    <Breadcrumb />
    <Blog />
  </Main>


</template>
<script>
export default {
  head: {
    title: 'Блог'
  },
  setup() {
    definePageMeta({
      title: 'Блог'
    });
  }
}
</script>