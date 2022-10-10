<template>
  <div class="article">
    <div class="article__body">
      <H4 class="article__title" :value="element.title"></H4>
      <div class="article__date">{{ element.date }}</div>
      <T2 class="article__text" :value="element.text"></T2>
    </div>
    <div class="article__foot">
      <div class="article__label">{{ element.label }}</div>
      <Button class="article__btn-more --link" href="/">
        <template #default>Подробнее</template>
        <template #iconRight>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 12H19.5" stroke="#8E49A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.5 5L19.5 12L12.5 19" stroke="#8E49A0" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </template>
      </Button>
    </div>
  </div>
</template>
<script src="./Article.js"></script>
<style src="./Article.scss">

</style>
