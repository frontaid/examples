<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="/">{{ content.index.title }}</nuxt-link>
      </li>
      <li v-for="page in content.pages">
        <nuxt-link :to="page.path">{{ page.title }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import conf from '../conf';

export default {
  data() {
    return {content: null};
  },
  async fetch() {
    this.content = await this.$content(conf.CONTENT).fetch();
  },
};
</script>
