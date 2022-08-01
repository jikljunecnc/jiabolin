import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: ()=> import("@/views/Login")
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: () => import( '@/views/HomeView.vue'),
    children:[
      {
        path:'/welcome',
        component:()=>import("@/components/Welcome.vue"),
        meta:{title:'首页'}
      },
      {
        path:'/supplier',
        component:()=>import('@/components/supplier/Supplier.vue'),
        meta:{title:'供应商管理'}
      }, 
      {
        path:'/member',
        component:()=>import('@/components/member/Member.vue'),
        meta:{title:'会员管理'}
      },
      {
        path:'/goods',
        component:()=>import('@/components/goods/Goods.vue'),
        meta:{title:'商品管理'}
      },{
        path:'/staff',
        component:()=>import('@/components/staff/Staff.vue'),
        meta:{title:'员工管理'}
      },
    ]
  },
  {
    path:'/',
    redirect:'/login'
  }
]

const router = new VueRouter({
  routes
})

export default router
