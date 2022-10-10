<template>
  <section class="top">
    <Case>
      <div class="top__head">
        <H2 class="top__title" value="Курсы иностранных языков для любого уровня"></H2>
        <Button class="top__btn-more --sm --b-violet">Все курсы</Button>
      </div>
      <div class="top__body">
        <div class="top__slider swiper" ref="slider">
          <div class="top__list swiper-wrapper">
            <Product v-for="item in list" :element="item" class="top__item swiper-slide"></Product>
          </div>
        </div>
        <div class="top__pagination swiper-pagination dots" ref="pagination"></div>
      </div>
    </Case>
  </section>
</template>
<script src="./Top.js"></script>
<style src="./Top.scss">

</style>
