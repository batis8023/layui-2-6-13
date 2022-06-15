const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/demo', component: httpVueLoader('./vues/demo.vue') },
]