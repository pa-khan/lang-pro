<template>
  <main class="main">
    <Breadcrumb />
    <Blog />
  </main>


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