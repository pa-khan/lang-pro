<template>
  <div v-if="list" class="best">
    <H3 class="best__title" value="Лучшие ученики"></H3>
    <div class="best__list">
      <div v-for="(item, index) in list" class="best__item">
        <div class="best__count">{{ index + 1 }}</div>
        <div class="best__name">{{ item.name }}</div>
        <div class="best__value">{{ item.value }} баллов</div>
      </div>
    </div>

    <div class="best__link-more"><a href="/auth" @click.prevent="toLink('/')">Смотреть всю статистику</a></div>

  </div>
</template>
<script src="./Best.js"></script>
<style src="./Best.scss">

</style>
