
export default [
  {
    path: '/',
    redirect: '/editor'
  },

  {
    path: '/learn-grantha',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/learn-sharada') }
    ]
  },

  {
    path: '/memory-cards',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/memory-cards') }
    ]
  },

  {
    path: '/flipcards-shuffle',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/flipcards-shuffle') }
    ]
  },

  {
    path: '/fill-grantha',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/fill-sharada') }
    ]
  },

  {
    path: '/match-letter',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/match-letter') }
    ]
  },

  {
    path: '/reading-practice',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/books') }
    ]
  },

  {
    path: '/words',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/words') }
    ]
  },

  {
    path: '/about',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/about') }
    ]
  },

  {
    path: '/editor',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },

  {
    path: '/image',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/image') }
    ]
  },

  {
    path: '/font-keyboard',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/download') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
