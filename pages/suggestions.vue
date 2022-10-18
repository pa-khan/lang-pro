<template>
  <Main>
    <Breadcrumb />
    <Sup class="--hide-img" title="Предложения по работе <br>сайта <u>Language to go</u>"
      desc="Мы всегда готовы становиться лучше! Есть предложения по улучшению работы сайта? Напишите нам"
      :isAlertShow="true" img="sup-img-2.png" formTitle="Написать в службу поддержки"
      formDesc="Напишите свои предложения по улучшению работы сайта" />


  </Main>
</template>
<script>
export default {
  head: {
    title: 'Cлужба поддержки'
  },
  setup() {
    definePageMeta({
      title: 'Cлужба поддержки'
    });
  }
}
</script>