<template>
  <div class="breadcrumb">
    <Case>
      <div class="breadcrumb__list" itemscope itemtype="http://schema.org/BreadcrumbList">
        <template v-for="(crumb, index) in crumbs" :key="index">
          <div class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
            <router-link :to="crumb" v-if="index < crumbs.length - 1" :title="crumb.meta.title" itemprop="item">
              <span itemprop="name">{{ crumb?.meta?.title }}</span>
            </router-link>
            <u v-else itemprop="item">
              <span itemprop="name">{{ $route.matched[0].meta.title }}</span>
            </u>
            <meta itemprop="position" :content="index + 1">
          </div>
          <div class="breadcrumb__sep" v-if="index < crumbs.length - 1">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13L7 7L1 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
        </template>
      </div>
    </Case>
  </div>
</template>
<script src="./Breadcrumb.js"></script>
<style src="./Breadcrumb.scss">

</style>
