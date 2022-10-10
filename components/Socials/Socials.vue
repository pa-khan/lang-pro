<template>
  <div class="socials">
    <div class="socials__list">
      <a v-for="item in list" href="item." class="socials__item" v-html="item.icon"></a>
    </div>
  </div>
</template>
<script src="./Socials.js"></script>
<style src="./Socials.scss">

</style>
