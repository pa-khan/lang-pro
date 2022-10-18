<template>
  <section class="work">
    <Case>
      <H2 class="work__title" value="Как это работает?"></H2>
      <div class="work__inner swiper" ref="slider">
        <div v-if="list" class="work__list swiper-wrapper">
          <div v-for="(item, index) in list" :key="item.name" class="work__item swiper-slide">
            <div class="work__content">
              <Counter :class="'work__counter ' + (index < list.length - 1 ? '--blue' : '--red')">0{{ index + 1 }}
              </Counter>
              <H4 class="work__name" :value="item.name"></H4>
              <T2 class="work__text" :value="item.text"></T2>
            </div>
            <div v-if="item.img" class="work__img">
              <img :src="`assets/images/${item.img}`" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="work__pagination swiper-pagination dots" ref="pagination"></div>
    </Case>
  </section>
</template>
<script src="./Work.js"></script>
<style src="./Work.scss">

</style>
