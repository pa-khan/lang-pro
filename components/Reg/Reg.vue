<template>
  <section class="reg">
    <Case>
      <div class="reg__wrap">
        <div class="reg__content">
          <H2 class="reg__title" value="Регистрируйтесь и приступайте к первому бесплатному уроку"></H2>
          <form class="reg__form">
            <Field class="reg__field --sm --bg-white" title="Телефон *" validation="phone"
              placeholder="+7 (___) ___-__-__" type="tel" v-model="inputPhone"></Field>
            <Button class="reg__btn-submit --sm --bg-violet">Начать обучение</Button>
            <Checkbox class="reg__checkbox --sm --b-gray" v-model:checked="policy">Отправляя заявку, я соглашаюсь с <a
                href="">политикой
                конфиденциальности</a> <br>и <a href="">пользовательским соглашением</a></Checkbox>
          </form>
        </div>
        <div class="reg__img">
          <img src="/assets/images/reg-img.png" alt="">
        </div>
      </div>
    </Case>
  </section>
</template>
<script src="./Reg.js"></script>
<style src="./Reg.scss">

</style>
