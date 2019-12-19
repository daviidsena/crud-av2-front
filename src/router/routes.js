import { routes as home } from '../pages/home'
import { routes as lista } from '../pages/lista'
import { routes as sair } from '../pages/sair'
import { routes as login } from '../modules/auth'

export default [
  ...home,
  ...lista,
  ...sair,
  ...login
]
