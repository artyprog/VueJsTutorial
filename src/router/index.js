import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import HelloWorld from '../components/lessons/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/lesson-1',
      name: 'HelloWorld',
      component: HelloWorld
    }    
  ]
})
