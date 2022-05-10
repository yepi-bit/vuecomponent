import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/draw',
    name: 'Draw',
    component: () => import(/* webpackChunkName: "about" */ '../views/Draw.vue')
  },
  {
    path: '/drag',
    name: 'Drag',
    component: () => import(/* webpackChunkName: "about" */ '../views/Drag.vue')
  },
  {
    path: '/colAttributes',
    name: 'ColAttributes',
    component: () => import(/* webpackChunkName: "about" */ '../views/ColAttributes.vue')
  },
  {
    path: '/flex',
    name: 'Flex',
    component: () => import(/* webpackChunkName: "about" */ '../views/Flex.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/cropper',
    name: 'Cropper',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cropper.vue')
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editor.vue')
  },
  {
    path: '/verify',
    name: 'Verify',
    component: () => import(/* webpackChunkName: "about" */ '../views/Verify.vue')
  },
  {
    path: '/capture',
    name: 'Capture',
    component: () => import(/* webpackChunkName: "about" */ '../views/Capture.vue')
  },
  {
    path: '/xlsx',
    name: 'Xlsx',
    component: () => import(/* webpackChunkName: "about" */ '../views/Xlsx.vue')
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dialog.vue')
  },
  {
    path: '/luck',
    name: 'Luck',
    component: () => import(/* webpackChunkName: "about" */ '../views/Luck.vue')
  },
  {
    path: '/cropUpload',
    name: 'cropUpload',
    component: () => import(/* webpackChunkName: "about" */ '../views/CropUpload.vue')
  },
  {
    path: '/dropZone',
    name: 'dropZone',
    component: () => import(/* webpackChunkName: "about" */ '../views/DropZone.vue')
  },
  {
    path: '/pictureInput',
    name: 'pictureInput',
    component: () => import(/* webpackChunkName: "about" */ '../views/PictureInput.vue')
  },
  {
    path: '/show',
    name: 'show',
    component: () => import(/* webpackChunkName: "about" */ '../views/Show.vue')
  },
  {
    path: '/brand',
    name: 'brand',
    component: () => import(/* webpackChunkName: "about" */ '../views/Brand.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
