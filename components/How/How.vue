<template>
  <div v-if="list" class="how">
    <H3 class="how__title" value="Как проходит обучение"></H3>
    <div class="how__list">
      <div v-for="item in list" class="how__item">
        <div class="how__img">
          <img :src="`/images/${item.img}`" alt="">
        </div>
        <div class="how__content">
          <H4 class="how__name" :value="item.title"></H4>
          <div v-if="item.desc" class="how__desc">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./How.js"></script>
<style src="./How.scss">

</style>
