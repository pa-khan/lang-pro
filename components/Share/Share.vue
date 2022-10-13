<template>
  <div v-if="list" class="share">
    <div class="share__title">Поделиться:</div>
    <div class="share__list">
      <a v-for="item in list" class="share__item" :href="item.href" v-html="item.icon"></a>
    </div>
  </div>
</template>
<script src="./Share.js"></script>
<style src="./Share.scss">

</style>
