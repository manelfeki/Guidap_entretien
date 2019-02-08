import Vue from 'vue'
import Router from 'vue-router'
import ListArticles from '@/components/ListArticles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListArticles',
      component: ListArticles
    }
  ]
})
