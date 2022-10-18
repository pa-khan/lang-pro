<template>
  <Main>
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
  </Main>
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