<template>
  <div class="cat">
    <Case>
      <H2 class="cat__title" value="Курсы"></H2>
      <div class="cat__langs">
        <Tab class="cat__lang" v-for="lang in langs.list" v-model:value="langs.value" :type="lang.type"
          :title="lang.title">
        </Tab>
      </div>

      <div class="cat__wrap">
        <div class="cat__list">
          <Product v-for="item in list" :element="item" class="cat__item"></Product>
        </div>
        <div class="cat__filter" if="filter">
          <div class="cat__filter-block" v-for="filterItem in filter">
            <div class="cat__filter-title">{{ filterItem.title }}</div>
            <div class="cat__filter-list">
              <Checkbox v-for="item in filterItem.list" class="cat__filter-item --sm --b-gray"
                v-model:checked="item.value">
                {{ item.title }}</Checkbox>
            </div>
          </div>
        </div>
      </div>
    </Case>
  </div>
</template>
<script src="./Cat.js"></script>
<style src="./Cat.scss">

</style>
