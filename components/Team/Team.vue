<template>
  <div class="team">
    <Case>
      <H2 class="team__title" value="Курсы создали профессиональные филологи и педагоги"></H2>
      <T1 class="team__subtitle"
        value="Носители языка, преподаватели зарубежных университетов, которые много лет работают в том числе и в России, владеют методиками преподавания своего языка, как иностранного и прекрасно знают нюансы преподавания именно в русскоязычной среде.">
      </T1>
      <div class="team__inner swiper" ref="slider">
        <div class="team__list swiper-wrapper">
          <div v-for="item in list" class="team__item swiper-slide">
            <div class="team__item-img">
              <img :src="`/assets/images/${item.img}`" alt="">
            </div>
            <div class="team__item-name">{{ item.name }}</div>
            <div class="team__item-desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Team.js"></script>
<style src="./Team.scss">

</style>
