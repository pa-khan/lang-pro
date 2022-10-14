<template>
  <footer class="footer">
    <div class="footer__top">
      <Case>
        <div class="footer__top-wrap">
          <div class="footer__col">
            <div class="footer__company">
              <Logo class="footer__logo" />
              <div class="footer__desc">Language2Go — интерактивная платформа для легкого, удобного и быстрого изучения
                иностранных языков.</div>
              <div v-if="pays" class="footer__pays">
                <div v-for="pay in pays" class="footer__pay">
                  <img :src="`/assets/images/${pay}`" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="footer__col">
            <H4 class="footer__title" value="Обучение"></H4>
            <div class="footer__nav">
              <div v-for="item in navs[0]" class="footer__nav-item">
                <a class="footer__nav-link" :href="item.href">{{ item.title }}</a>
              </div>
            </div>
          </div>
          <div class="footer__col">
            <H4 class="footer__title" value="Информация"></H4>
            <div class="footer__nav">
              <div v-for="item in navs[1]" class="footer__nav-item">
                <a class="footer__nav-link" :href="item.href">{{ item.title }}</a>
              </div>
            </div>
          </div>
          <div class="footer__col">
            <H4 class="footer__title" value="Контакты"></H4>
            <div class="footer__phone"><a href="tel:+74951563550">+7 (495) 156-35-50</a></div>
            <div class="footer__emails">
              <p><a href="mailto:info@language2go.ru">info@language2go.ru</a></p>
              <p><a href="mailto:support@language2go.ru">support@language2go.ru</a></p>
            </div>
            <div class="footer__address">
              <p>101000, Москва, Россия</p>
            </div>
            <Socials class="footer__socials"></Socials>
          </div>
        </div>
      </Case>
    </div>
    <div class="footer__bot">
      <Case>
        <div class="footer__bot-wrap">
          <div class="footer__copy">© 2022 Language to go</div>
          <div class="footer__links" v-if="links">
            <a class="footer__links-item" v-for="item in links" :href="item.href">{{ item.title }}</a>
          </div>
        </div>
      </Case>
    </div>
  </footer>
</template>
<script src="./Footer.js"></script>
<style src="./Footer.scss">

</style>
