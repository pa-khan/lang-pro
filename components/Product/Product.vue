<template>
  <div class="product" :class="bgMode">
    <div class="product__body">
      <div class="product__lang">
        <img :src="`/images/flags/${element.lang}.png`" alt="">
      </div>
      <div class="product__title">{{ element.title }}</div>
      <div class="product__data">
        <div class="product__data-item">
          <div class="product__data-name">Длительность:</div>
          <div class="product__data-value">{{ element.delay }} часов</div>
        </div>
        <div class="product__data-item">
          <div class="product__data-name">Модулей:</div>
          <div class="product__data-value">{{ element.modules }}</div>
        </div>
      </div>
    </div>
    <div class="product__foot">
      <Button class="product__btn-more --link" :href="'/catalog/' + element.slug">
        <template #default>Узнать подробнее</template>
        <template #iconRight>
          <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 12H19.5" stroke="#8E49A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.5 5L19.5 12L12.5 19" stroke="#8E49A0" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </template>
      </Button>
      <div class="product__price">От {{ element.price.toLocaleString('ru') }} Р</div>
    </div>
  </div>
</template>
<script src="./Product.js"></script>
<style src="./Product.scss">

</style>
