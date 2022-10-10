<template>
  <section class="why">
    <Case>
      <H2 class="why__title" value="Почему вы быстро освоите язык"></H2>
      <div v-if="list" class="why__list">
        <div v-for="(item, index) in list" :key="item.title" class="why__item">
          <div class="why__content">
            <Counter :class="'why__counter --' + item.mode">0{{ index + 1 }}</Counter>
            <H3 class="why__name" :value="item.title"></H3>
            <T1 class="why__text" :value="item.text"></T1>
          </div>
          <div class="why__img">
            <img :src="`assets/images/${item.img}`" alt="">
          </div>
        </div>
      </div>
    </Case>
  </section>
</template>
<script src="./Why.js"></script>
<style src="./Why.scss">

</style>
