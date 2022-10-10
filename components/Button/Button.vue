<template>
  <!-- <a v-if="href" class="button" :href="href" @click.prevent="toLink(href)">
    <div v-if="$slots.iconLeft" class="button__icon --left">
      <slot name="iconLeft" />
    </div>
    <div class="button__text">
      <slot name="default" />
    </div>
  </a> -->
  <div class="button">
    <div v-if="$slots.iconLeft" class="button__icon --left">
      <slot name="iconLeft" />
    </div>
    <div class="button__text">
      <slot name="default" />
    </div>
    <div v-if="$slots.iconRight" class="button__icon --right">
      <slot name="iconRight" />
    </div>
  </div>
</template>
<script src="./Button.js"></script>
<style src="./Button.scss">

</style>
