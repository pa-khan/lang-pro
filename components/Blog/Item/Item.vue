<template>
  <div class="blog-item">
    <Case>
      <div class="blog-item__wrap">
        <div class="blog-item__left">
          <H2 class="blog-item__title" :value="element.title"></H2>
          <div class="blog-item__date">{{ element.date }}</div>
          <T2 class="blog-item__text" :value="element.text"></T2>
          <div class="blog-item__foot">
            <div class="blog-item__label">{{ label }}</div>
            <Share class="blog-item__share"></Share>
          </div>
          <Other class="blog-item__other" :list="element.other"></Other>
        </div>
        <div class="blog-item__right">
          <div class="blog-item__img">
            <img src="/assets/images/blog-img.png" alt="">
          </div>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Item.js"></script>
<style src="./Item.scss">

</style>
