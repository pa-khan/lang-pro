<template>
  <main class="main">
    <Breadcrumb />
    <BlogItem :element="item" />
  </main>
</template>
<script>
import item from '@/data/blog-item.json';

export default {
  head: {
    title: item.title
  },
  setup() {
    definePageMeta({
      title: item.title
    });
  },
  data() {
    return {
      item
    }
  }
}
</script>