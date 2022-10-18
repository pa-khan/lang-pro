<template>
  <div v-if="links" class="nav">
    <div class="nav__list">
      <div v-for="link of links" :key="link.title" class="nav__item"
        :class="[link.isOpen ? '--open' : null, link.sub ? '--has-sub' : null]">
        <a class="nav__link" :href="link.href"
          @click.prevent="link.sub ? toggleNav(link) : toLink(link.href, isNavShow = false)">
          <div class="nav__link-title">{{ link.title }}</div>
          <div class="nav__link-arrow" v-if="link.sub">
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L13 1" stroke="#333333" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </div>
        </a>
        <div class="nav__list --sub" v-if="link.sub">
          <div v-for="subLink of link.sub" :key="subLink.title" class="nav__item">
            <a class="nav__link" :href="subLink.href" @click.prevent="toLink(subLink.href, closeSubNav(subLink))">
              <div class="nav__link-title">{{ subLink.title }}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Nav.js"></script>
<style src="./Nav.scss">

</style>
