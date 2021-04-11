import Vue from 'vue'
import VueRouter from 'vue-router'
import QuizPage from '../views/QuizPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'quiz-page',
    component: QuizPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
