<template>
  <div v-if="list" class="similar">
    <H3 class="similar__title" value="Похожие курсы"></H3>
    <div class="similar__list">
      <Product v-for="item in list" :element="item" class="similar__item"></Product>
    </div>
  </div>
</template>
<script src="./Similar.js"></script>
<style src="./Similar.scss">

</style>
