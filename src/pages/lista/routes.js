export default [
  {
    path: '/lista',
    name: 'lista',
    component: () => import(/* webpackChunkName: "lista" */ './Lista')
  }
]
