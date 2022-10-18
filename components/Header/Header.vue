<template>
  <header class="header">
    <div class="header__case">
      <Logo class="header__logo" />
      <Button class="header__auth --sm --bg-violet" href="/auth">Войти</Button>
      <div class="header__ham" :class="isNavShow ? '--x' : null" @click="isNavShow = !isNavShow">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <Nav class="header__nav" :class="isNavShow ? '--show' : null" />
  </header>
</template>
<script src="./Header.js"></script>
<style src="./Header.scss">

</style>
