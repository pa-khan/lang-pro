<template>
  <div class="field" :class="[isFocus ? '--focus' : null, isFilled ? '--filled' : null]">
    <div v-if="title" class="field__title" v-html="title"></div>
    <div class="field__wrap">
      <input v-if="type != 'textarea'" :type="type ? type : 'text'" class="field__area" :placeholder="placeholder"
        :value="value" @input="updateValue($event.target.value)" @focusin="isFocus = true" @focusout="isFocus = false">
      <textarea v-else class="field__area" :placeholder="placeholder" :value="value"
        @input="updateValue($event.target.value)" @focusin="isFocus = true" @focusout="isFocus = false"></textarea>
    </div>
  </div>
</template>
<script src="./Field.js"></script>
<style src="./Field.scss">

</style>
