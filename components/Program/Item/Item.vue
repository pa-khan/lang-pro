<template>
  <div class="prog" @click=""
    :class="[isOpen ? classOpen : null, isHide ? classHide : null, isShow ? classShow : null]">
    <div class="prog__head" ref="head" @click="toggleBlock">
      <div class="prog__module"><span>Модуль</span> {{ index + 1 }}:</div>
      <div class="prog__name">{{ element.title }}</div>
      <div class="prog__section">{{ element.lessons }} уроков<span> / {{ element.points }} баллов</span></div>
      <div class="prog__arrow">
        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0.999999L7 7L13 1" stroke="#641F76" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
      </div>
    </div>
    <div class="prog__body" ref="body">
      <div class="prog__text">{{ element.text }}</div>
    </div>
  </div>
</template>
<script src="./Item.js"></script>
<style src="./Item.scss">

</style>
