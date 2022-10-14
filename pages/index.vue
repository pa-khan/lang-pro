<template>
  <main class="main">
    <Intro />
    <Top />
    <Audience />
    <Why />
    <Methodology />
    <Work />
    <Reviews />
    <Reg />
    <Articles />
    <Questions />
  </main>
</template>
<script>
export default {
  head: {
    title: 'Главная'
  },
  setup() {
    definePageMeta({
      title: 'Главная'
    });
  }
}
</script>