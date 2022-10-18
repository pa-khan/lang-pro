<template>
  <section class="audience">
    <Case>
      <div class="audience__wrap">
        <div class="audience__content">
          <H2 class="audience__title" value="Кому подойдет <i>L2GO</i>"></H2>
          <T1 class="audience__text" value="<p><u>Language to go</u> подойдет всем, кто хочет за короткий срок качественно изменить свою жизнь, освоив
              иностранный язык.</p>"></T1>
          <Button class="audience__button --md --bg-violet">Попробовать бесплатно</Button>
        </div>
        <div class="audience__inner swiper" ref="slider">
          <div v-if="list" class="audience__list swiper-wrapper">
            <div v-for="item in list" :key="item.title" :class="'audience__item swiper-slide --' + item.mode">
              <div class="audience__item-icon">
                <img :src="`assets/images/${item.icon}`" alt="">
              </div>
              <H4 class="audience__item-title" :value="item.title"></H4>
              <T2 class="audience__item-text" :value="item.text"></T2>
            </div>
          </div>
        </div>
        <Button class="audience__button --hidden --md --bg-violet">Попробовать бесплатно</Button>
        <div class="audience__bg">
          <svg width="739" height="560" viewBox="0 0 739 560" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.05" fill-rule="evenodd" clip-rule="evenodd"
              d="M132.356 65.6116C198.013 24.3126 280.788 1.43175 366.49 0.891698C452.192 0.351601 535.483 22.1859 602.084 62.6515C668.685 103.117 714.448 159.693 731.526 222.681C748.605 285.669 735.936 351.145 695.692 407.884C673.664 438.941 663.015 433.246 666.495 469.948L703.369 552.975C711.449 571.176 688.48 581.896 667.297 572.85L568.383 530.584C528.382 523.067 528.656 529.503 491.159 539.288C409.601 560.565 320.672 559.729 239.836 536.926C159 514.123 91.3721 470.795 48.7122 414.477C6.05232 358.159 -8.94034 292.414 6.34154 228.676C21.6234 164.938 66.213 107.238 132.356 65.6116Z"
              fill="#2E90D1" />
          </svg>
        </div>
      </div>
    </Case>
  </section>
</template>
<script src="./Audience.js"></script>
<style src="./Audience.scss">

</style>
