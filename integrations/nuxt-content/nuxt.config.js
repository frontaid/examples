import conf from './conf';

export default {
    modules: [
        '@nuxt/content',
    ],
    router: {
        async extendRoutes(routes, resolve) {
            const {$content} = require('@nuxt/content');
            const {pages} = await $content(conf.CONTENT).fetch();
            pages.forEach(page => {
                routes.push({
                    path: page.path,
                    component: resolve(__dirname, 'components/MetaPage.vue'),
                    meta: page,
                });
            });
        },
    },
};
