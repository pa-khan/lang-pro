<template>
  <div class="checkbox" :class="[checked ? classChecked : null]" @click="toggleChecked">
    <input type="checkbox" class="checkbox__input" :value="value" :name="group" :checked="checked ? 'checked' : null">
    <div class="checkbox__wrap">
      <div class="checkbox__box">
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.6667 1L5.50004 10.1667L1.33337 6" stroke="white" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
      <div class="checkbox__text">
        <slot />
      </div>
    </div>
  </div>
</template>
<script src="./Checkbox.js"></script>
<style src="./Checkbox.scss">

</style>
