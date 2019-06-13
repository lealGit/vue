//引入vue和router模块
import Vue from 'vue'
import Router from 'vue-router'
//引入路由组件
import Login from './components/Login'
import Index from './components/Index'
import Hello from './components/Hello'

//使用router
Vue.use(Router)

export default new Router({
    //配置路由模块
    routes: [
        {
            path: '/',
            name: 'login',
            component:Login
        },
        {
            path: '/index',
            name: 'Index',
            component: Index,
            children: [
                {
                    path: 'hello',
                    name: 'Hello',
                    component: Hello

                }
            ]
        }
    ]
})