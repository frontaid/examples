<template>
  <main>
    <h1 v-html="page.title"></h1>
    <div v-html="page.content"></div>
  </main>
</template>

<script>
import conf from '../conf';

export default {
  head() {
    return {title: `${this.page.title} | ${this.content.title}`};
  },
  computed: {
    page() {
      return this.$route.meta;
    },
  },
  async asyncData({$content}) {
    const content = await $content(conf.CONTENT).fetch();
    return {content};
  },
};
</script>
