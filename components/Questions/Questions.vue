<template>
  <section class="questions">
    <Case>
      <div class="questions__wrap">
        <div class="questions__inner">
          <div class="questions__text">
            <H2 class="questions__title" value="Отвечаем на частые вопросы"></H2>
            <Button class="questions__btn --md --bg-violet" href="/faq">Задать вопрос</Button>
          </div>
          <div class="questions__img">
            <img src="/assets/images/questions-img.png" alt="">
          </div>
        </div>
        <div v-if="list" class="questions__list">
          <QuestionsItem v-for="item in list" :key="item.title" class="questions__item" :title="item.title"
            :text="item.text">
          </QuestionsItem>
        </div>
      </div>
    </Case>
  </section>
</template>
<script src="./Questions.js"></script>
<style src="./Questions.scss">

</style>
