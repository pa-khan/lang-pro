<template>
  <main class="main">
    <!-- <Breadcrumb /> -->
    <Card :element="course" />
    <Reg />
  </main>
</template>
<script>
import course from '@/data/course.json';

export default {
  head: {
    title: course.title
  },
  setup() {
    definePageMeta({
      title: course.title
    });
  },
  data() {
    return {
      course
    }
  }
}
</script>