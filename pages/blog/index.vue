<template>
  <Breadcrumb />
  <Title value="Блог <br><u>Language to go</u>" />

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