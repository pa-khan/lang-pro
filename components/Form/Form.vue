<template>
  <div class="form">
    <H4 class="form__title" :value="title"></H4>
    <div class="form__desc">{{ desc }}</div>
    <div class="form__wrap">
      <Field class="form__field --md --bg-gray" title="Имя" placeholder="Иван" type="text" v-model="inputName">
      </Field>
      <Field class="form__field --md --bg-gray" title="Телефон" placeholder="+7 (___) ___-__-__" type="tel"
        v-model="inputPhone"></Field>
      <Field class="form__field --md --bg-gray --textarea" title="Сообщение <u>(не обязательно)</u>"
        placeholder="Расскажите нам о возникшем вопрос" type="textarea" v-model="inputPhone"></Field>
      <Checkbox class="form__checkbox --sm --b-gray" v-model:checked="policy">Отправляя заявку, я соглашаюсь с <a
          href="">политикой
          конфиденциальности</a> и <a href="">пользовательским соглашением</a></Checkbox>
      <Button class="form__btn --md --bg-violet">Оставить заявку</Button>
    </div>
  </div>
</template>
<script src="./Form.js"></script>
<style src="./Form.scss">

</style>
