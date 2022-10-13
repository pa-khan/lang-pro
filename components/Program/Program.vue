<template>
  <div v-if="list" class="program">
    <H3 class="program__title" value="Программа курса"></H3>
    <div class="program__list">
      <ProgramItem v-for="(item, index) in list" class="program__item" :element="item" :index="index"></ProgramItem>
    </div>
  </div>
</template>
<script src="./Program.js"></script>
<style src="./Program.scss">

</style>
