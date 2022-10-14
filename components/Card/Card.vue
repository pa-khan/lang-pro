<template>
  <div class="card">
    <Case>
      <div class="card__wrap">
        <div class="card__left">
          <div class="card__content">
            <H2 class="card__title" :value="element.title"></H2>
            <div v-if="element.text" class="card__text">
              <H3 value="О курсе"></H3>
              <T1 :value="element.text"></T1>
            </div>
            <div class="card__foot">
              <div class="card__label">{{ label }}</div>
              <Share class="card__share"></Share>
            </div>
            <Program class="card__program" :list="element.program" />
            <How class="card__how" :list="how" />
            <div v-if="element.reviews" class="card__reviews">
              <div class="card__reviews-head">
                <H3 class="card__reviews-title" value="Отзывы о курсе"></H3>
                <Button class="card__reviews-more --sm --b-violet" href="/reviews">Все отзывы</Button>
              </div>
              <div class="card__reviews-body">
                <div class="card__reviews-list">
                  <Review v-for="item in element.reviews" class="card__reviews-item --blue" :element="item"></Review>
                </div>
              </div>
            </div>
            <Similar class="card__similar" :list="element.similar" />
          </div>
        </div>
        <div class="card__right">
          <div class="card__info">
            <div class="card__lang">
              <img :src="`/assets/images/flags/${element.lang}.png`" alt="">
            </div>

            <div class="card__price">
              <div class="card__price-title">Стоимость</div>
              <div class="card__price-value">От {{ element.price.toLocaleString('ru') }} Р</div>
            </div>

            <div v-if="data" class="card__data">
              <div v-for="item in data" class="card__data-item">
                <div class="card__data-value">{{ item.value }}</div>
                <div class="card__data-title">{{ item.title }}</div>
              </div>
            </div>

            <Button class="card__btn-order --md --bg-violet">Записаться на курс</Button>
          </div>
          <Best class="card__best" :list="element.best" />
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Card.js">
import Share from "../Share/Share.vue";</script>
<style src="./Card.scss">

</style>
