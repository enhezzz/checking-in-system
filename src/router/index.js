import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/activity/Index'
import Activity from '@/components/activity/Activity'
import ActivityDetail from '@/components/activity/ActivityDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity,
      children:[
        {
          path: ':type?',
          name: 'activityDetail',
          component: ActivityDetail
        }
      ]
    },
  ]
})
