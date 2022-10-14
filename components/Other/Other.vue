<template>
  <div v-if="list" class="other">
    <div class="other__head">
      <H4 class="other__title" value="Другие новости"></H4>
      <Button class="other__btn-more --sm --b-violet" href="/blog">Все новости</Button>
    </div>
    <div class="other__body">
      <div class="other__list">
        <div v-for="item in list" class="other__item">
          <div class="other__item-title">{{ item.title }}</div>
          <div class="other__item-date">{{ item.date }}</div>
          <div class="other__item-foot">
            <div class="other__item-label" :class="getLabelClass(item.label)">{{ getLabel(item.label) }}</div>
            <Button class="other__item-more --link" :href="`/blog/${item.slug}`">
              <template #default>Подробнее</template>
              <template #iconRight>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 12H19.5" stroke="#8E49A0" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M12.5 5L19.5 12L12.5 19" stroke="#8E49A0" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </template>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Other.js"></script>
<style src="./Other.scss">

</style>
