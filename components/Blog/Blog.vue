<template>
  <div class="blog">
    <Case>
      <div class="blog__wrap">
        <div class="blog__left">
          <H2 class="blog__title" value="Блог <br><u>Language to go</u>"></H2>
          <Desc value="Будьте в курсе наших событий. Следите за нашими новостями" />
          <div class="blog__cats">
            <Tab class="blog__cat" v-for="cat in cats.list" v-model:value="cats.value" :type="cat.type"
              :title="cat.title">
            </Tab>
          </div>
          <div v-if="list" class="blog__list">
            <Article v-for="item in list" class="blog__item" :element="item"></Article>
          </div>
        </div>
        <div class="blog__right">
          <div class="blog__img">
            <img src="/assets/images/blog-img.png" alt="">
          </div>

        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Blog.js"></script>
<style src="./Blog.scss">

</style>
