<template>
  <div class="sup">
    <Case>
      <div class="sup__wrap">
        <div class="sup__left">

          <H2 class="sup__title" :value="title"></H2>
          <Desc class="sup__desc" :value="desc" />
          <div v-if="info" class="sup__info">
            <H4 value="Общая информация"></H4>
            <T2 :value="info"></T2>
          </div>

          <div v-if="isAlertShow" class="sup__alert">
            <div class="sup__alert-head">
              <div class="sup__alert-icon">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.75 10.4167H22.9167V25H18.75V10.4167ZM18.75 27.0834H22.9167V31.25H18.75V27.0834Z"
                    fill="#78258D" />
                  <path
                    d="M20.7354 0C9.30208 0 0 9.34583 0 20.8333C0 32.3208 9.34583 41.6667 20.8333 41.6667C32.3208 41.6667 41.6667 32.3208 41.6667 20.8333C41.6667 9.34583 32.2771 0 20.7354 0ZM20.8333 37.5C11.6438 37.5 4.16667 30.0229 4.16667 20.8333C4.16667 11.6438 11.5979 4.16667 20.7354 4.16667C29.9812 4.16667 37.5 11.6438 37.5 20.8333C37.5 30.0229 30.0229 37.5 20.8333 37.5Z"
                    fill="#78258D" />
                </svg>
              </div>
              <H3 class="sup__alert-title" value="Общая информация"></H3>
            </div>
            <div class="sup__alert-body">
              <T2 class="sup__alert-text"
                value="<p>Здесь мы собираем предложения по улучшению <u>Language to go</u> и <u>Language to go</u> <br>Если вы столкнулись с техническими сложностями, свяжитесь с поддержкой</p><p>Пожелания по развитию <u>Language to go</u> можно оставить здесь. <br>Пожелания о добавлении на <u>Language to go</u> курсов, материалов, статей можно оставить здесь.</p>">
              </T2>
            </div>
          </div>
          <Form class="sup__form" :title="formTitle" :desc="formDesc" />
        </div>
        <div class="sup__right">
          <div class="sup__img">
            <img :src="`/assets/images/${img}`" alt="">
          </div>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Sup.js"></script>
<style src="./Sup.scss">

</style>
