<template>
  <div class="tab" @click="$emit('update:value', type)" :class="value == type ? '--checked' : null">
    <input type="radio" class="tab__input" :value="type" v-model="value">
    <div class="tab__title">{{ title }}</div>
  </div>
</template>
<script src="./Tab.js"></script>
<style src="./Tab.scss">

</style>
