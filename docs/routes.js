const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }
// 上面是测试
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/demo', component: httpVueLoader('./vues/demo.vue') },
]