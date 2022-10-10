<template>
  <div class="field">
    <div v-if="title" class="field__title">{{ title }}</div>
    <div class="field__wrap">
      <input :type="type ? type : 'text'" class="field__area" :placeholder="placeholder" :value="value"
        @input="$emit('update:value', $event.target.value)">
    </div>
  </div>
</template>
<script src="./Field.js"></script>
<style src="./Field.scss">

</style>
