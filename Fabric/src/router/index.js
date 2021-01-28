import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/pcportal',
    children: [
      {
        path: '/pcportal',
        name: 'pcportal',
        component: () => import('../views/Pcportal.vue')  //首页
      },
      {
        path: '/enrollmentplanmanagement',
        name: 'enrollmentplanmanagement',
        component: () => import('../views/Enrollmentplan/EnrollmentplanManagement.vue')  //招生计划管理
      },
      {
        path: '/enrollmentplaninquiry',
        name: 'enrollmentplaninquiry',
        component: () => import('../views/Enrollmentplan/EnrollmentplanInquiry.vue')  //招生计划查询
      },
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
