<template>
  <div class="cat">
    <Case>
      <H2 class="cat__title" value="Курсы"></H2>
      <div class="cat__settings">
        <div class="cat__lang-current">{{ langText }}</div>
        <Button class="cat__btn-filter" @click="isFilterShow = !isFilterShow">
          <template #default>Фильтры</template>
          <template #iconRight>
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.6663 17.3334H5.33301" stroke="#641F76" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M26.6667 17.3334H24" stroke="#641F76" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M21.3337 20C22.8064 20 24.0003 18.8061 24.0003 17.3333C24.0003 15.8605 22.8064 14.6666 21.3337 14.6666C19.8609 14.6666 18.667 15.8605 18.667 17.3333C18.667 18.8061 19.8609 20 21.3337 20Z"
                stroke="#641F76" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.6663 6.66663H5.33301" stroke="#641F76" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M26.6667 6.66663H16" stroke="#641F76" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path
                d="M13.3337 9.33333C14.8064 9.33333 16.0003 8.13943 16.0003 6.66667C16.0003 5.19391 14.8064 4 13.3337 4C11.8609 4 10.667 5.19391 10.667 6.66667C10.667 8.13943 11.8609 9.33333 13.3337 9.33333Z"
                stroke="#641F76" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </template>
        </Button>
      </div>
      <div class="cat__langs">
        <Tab class="cat__lang" v-for="lang in langs.list" v-model:value="langs.value" :type="lang.type"
          :title="lang.title" @click="langText = lang.title">
        </Tab>
      </div>

      <div class="cat__wrap">
        <div class="cat__list">
          <Product v-for="item in list" :element="item" class="cat__item"></Product>
        </div>
        <div class="cat__filter" :class="isFilterShow ? '--show' : null" if="filter">
          <div class="cat__filter-head">
            <div class="cat__filter-main">Фильтры</div>
            <div class="cat__filter-close" @click="isFilterShow = false">
              <div></div>
              <div></div>
            </div>
          </div>
          <div class="cat__filter-body">
            <div class="cat__filter-block --hidden">
              <div class="cat__filter-title">Курсы</div>
              <div class="cat__filter-list">
                <div class="cat__langs">
                  <Tab class="cat__lang" v-for="lang in langs.list" v-model:value="langs.value" :type="lang.type"
                    :title="lang.title" @click="langText = lang.title">
                  </Tab>
                </div>
              </div>
            </div>
            <div class="cat__filter-block" v-for="filterItem in filter">
              <div class="cat__filter-title">{{ filterItem.title }}</div>
              <div class="cat__filter-list">
                <Checkbox v-for="item in filterItem.list" class="cat__filter-item --sm --b-gray"
                  v-model:checked="item.value">
                  {{ item.title }}</Checkbox>
              </div>
            </div>
          </div>
          <div class="cat__filter-foot">
            <Button class="cat__filter-reset --md --b-violet" @click="resetFilter">Сбросить</Button>
            <Button class="cat__filter-submit --md --bg-violet" @click="isFilterShow = false">Показать курсы</Button>
          </div>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Cat.js"></script>
<style src="./Cat.scss">

</style>
