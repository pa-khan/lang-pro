<template>
  <section class="reviews">
    <Case>
      <div class="reviews__head">
        <H2 class="reviews__title" value="Что говорят о нас ученики?"></H2>
        <Button class="reviews__btn-more --sm --b-violet">Все отзывы</Button>
      </div>
      <div class="reviews__body">
        <div class="reviews__img">
          <img src="assets/images/reviews-img.png" alt="">
        </div>
        <div v-if="list" class="reviews__wrap">
          <div class="reviews__slider swiper" ref="slider">
            <div class="reviews__list swiper-wrapper">
              <Review v-for="item in list" class="reviews__item swiper-slide --peach" :element="item"></Review>
            </div>
          </div>
          <div class="reviews__pagination swiper-pagination dots" ref="pagination"></div>
        </div>
      </div>
      <div class="reviews__bg">
        <svg width="330" height="383" viewBox="0 0 330 383" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20.5" y="20.5" width="289" height="342" rx="144.5" stroke="#FFEFEF" stroke-width="41" />
        </svg>
      </div>
    </Case>
  </section>
</template>
<script src="./Reviews.js"></script>
<style src="./Reviews.scss">

</style>
