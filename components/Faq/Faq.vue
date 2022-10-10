<template>
  <section class="faq">
    <Case>
      <div class="faq__wrap">
        <div class="faq__inner">
          <H2 class="faq__title" value="Отвечаем на частые вопросы"></H2>
          <Button class="faq__btn --md --bg-violet">Задать вопрос</Button>
          <div class="faq__img">
            <img src="assets/images/faq-img.png" alt="">
          </div>
        </div>
        <div v-if="list" class="faq__list">
          <FaqItem v-for="item in list" :key="item.title" class="faq__item" :title="item.title" :text="item.text">
          </FaqItem>
        </div>
      </div>
    </Case>
  </section>
</template>
<script src="./Faq.js"></script>
<style src="./Faq.scss">

</style>
