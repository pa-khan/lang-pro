<template>
  <div class="login">
    <Case>
      <div class="login__inner">
        <Logo class="login__logo" />
        <div class="login__wrap">
          <div class="login__content">
            <div class="login__tabs">
              <div v-if="tab == 1" class="login__tab">
                <div class="login__title">Вход в кабинет</div>
                <T2 class="login__text" value="На указанный номер поступит звонок с номера +7 (999) 999-ХХ-ХХ"></T2>
                <Field class="login__phone --md --bg-gray" validation="phone" title="Телефон" :maxlength="19"
                  placeholder="+7 (___) ___-__-__" type="tel" v-model="inputPhone"></Field>
                <Button class="login__btn-next --md --bg-violet" @click="goTab()">Продолжить</Button>
                <div class="login__or">или</div>
                <div class="login__socials">
                  <Button v-for="social in socials" class="login__social">
                    <template #iconLeft>
                      <div v-html="social.icon"></div>
                    </template>
                    <template #default>{{social.title}}</template>
                  </Button>
                </div>
              </div>
              <div v-else-if="tab == 2" class="login__tab">
                <div class="login__title">Введите код</div>
                <T2 class="login__text"
                  value="Введите последние 4 цифры входящего вызова, с номера: <u>+7 (999) 999-ХХ-ХХ</u>"></T2>
                <div class="login__control"><span @click="goTab(1)">Изменить</span></div>
                <div class="login__digits">
                  <Field class="login__digit --md --bg-gray" type="tel" :maxlength="1" v-model="code_1"></Field>
                  <Field class="login__digit --md --bg-gray" type="tel" :maxlength="1" v-model="code_2"></Field>
                  <Field class="login__digit --md --bg-gray" type="tel" :maxlength="1" v-model="code_3"></Field>
                  <Field class="login__digit --md --bg-gray" type="tel" :maxlength="1" v-model="code_4"></Field>
                </div>
                <div class="login__desc">Не сообщайте код никому</div>
                <div class="login__repeat">Получить новый код можно через <var>{{ timer }}</var></div>
              </div>
              <div v-else-if="tab == 3" class="login__tab">
                <div class="login__title">Введите код</div>
                <T2 :value="`Был совершен входящий вызов на указанный номер <br> ${phone}`"></T2>
                <div class="login__control"><span>Изменить</span></div>
                <Button class="login__btn-call --md --bg-violet">Заказать повторный звонок</Button>
                <div class="login__repeat"><span>Отправить смс с кодом</span></div>
              </div>
            </div>
          </div>
          <div class="login__img">
            <img src="/assets/images/auth-img.png" alt="">
          </div>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Login.js">
import Button from '../Button/Button.vue';</script>
<style src="./Login.scss">

</style>
