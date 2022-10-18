<template>
  <div v-if="list" class="similar">
    <H3 class="similar__title" value="Похожие курсы"></H3>
    <div class="similar__inner swiper" ref="slider">
      <div class="similar__list swiper-wrapper">
        <Product v-for="item in list" :element="item" class="similar__item swiper-slide"></Product>
      </div>
    </div>
  </div>
</template>
<script src="./Similar.js"></script>
<style src="./Similar.scss">

</style>
