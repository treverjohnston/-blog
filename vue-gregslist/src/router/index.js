import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Blogs from '@/components/Blogs'
import Blog from '@/components/Blog'
import Wiggy from '@/components/Wiggy'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/blogs', name: 'Blogs', component: Blogs},
    {path: '/blogs/:blogId', name: 'Blog', component: Blog},
    {path: '/wiggy', name: 'Wiggy', component: Wiggy}

  ]
}) 
