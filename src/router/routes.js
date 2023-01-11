const routes = [
    {
        path: '/',
        name: 'home',
        title: '首页',
        component: () => import('@/views/home.vue'), //.vue不能省略
    },
    {
        path: '/login',
        name: 'login',
        title: '登录页',
        component: () => import('@/views/login.vue'),
    },
    {
        path: '/signup',
        name: 'signup',
        title: '注册页',
        component: () => import('@/views/signup.vue'),
    },
    

]
export default routes
