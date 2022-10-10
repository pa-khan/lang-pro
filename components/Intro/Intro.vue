<template>
  <section class="intro">
    <Case>
      <div class="intro__wrap">
        <div class="intro__content">
          <div class="intro__desc">Language to go</div>
          <H1 class="intro__title" value="Онлайн-школа иностранных языков"></H1>
          <div class="intro__text">Достигайте своих целей с помощью авторских игровых методик от носителей языка</div>
          <div class="intro__controls">
            <Button class="intro__btn-start --md --bg-violet">Попробовать бесплатно</Button>
            <Button class="intro__btn-video">
              <template #iconLeft>
                <svg width="60" height="61" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="30.5" r="30" fill="#FFEFEF" />
                  <path
                    d="M40.2864 29.304C41.5397 30.0873 41.5397 31.9127 40.2864 32.696L26.06 41.5875C24.7279 42.4201 23 41.4624 23 39.8915L23 22.1085C23 20.5376 24.7279 19.5799 26.06 20.4125L40.2864 29.304Z"
                    fill="#F6B5B6" />
                </svg>
              </template>
              <template #default>Посмотреть промо-ролик</template>
            </Button>
          </div>
        </div>
        <div class="intro__img">
          <img src="@/assets/images/intro-img.png" alt="">
        </div>
      </div>
    </Case>
  </section>
</template>
<script src="./Intro.js"></script>
<style src="./Intro.scss">

</style>
