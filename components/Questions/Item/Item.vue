<template>
  <div class="faq-item" ref="block"
    :class="[isOpen ? classOpen : null, isHide ? classHide : null, isShow ? classShow : null]">
    <div class="faq-item__head" ref="head" @click="toggleBlock">
      <H4 class="faq-item__title" :value="title"></H4>
      <div class="faq-item__icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 6.6665V25.3332" stroke="#641F76" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M6.6665 16H25.3332" stroke="#641F76" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="faq-item__body" ref="body">
      <T2 class="faq-item__text" :value="text"></T2>
    </div>
  </div>
</template>
<script src="./Item.js"></script>
<style src="./Item.scss">

</style>
