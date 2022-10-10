<template>
  <Intro />
  <Top />
  <Audience />
  <Why />
  <Methodology />
  <Work />
  <Reviews />
  <Reg />
  <Articles />
  <Faq />
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