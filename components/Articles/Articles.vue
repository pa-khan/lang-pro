<template>
  <section class="articles">
    <Case>
      <div class="articles__head">
        <H2 class="artciles__title" value="Полезные новости и статьи"></H2>
        <Button class="articles__btn-more --sm --b-violet">Все новости</Button>
      </div>
      <div class="articles__body">
        <div v-if="list" class="articles__list">
          <Article v-for="item in list" class="articles__item" :element="item"></Article>
        </div>
      </div>
    </Case>
  </section>
</template>
<script src="./Articles.js"></script>
<style src="./Articles.scss">

</style>
