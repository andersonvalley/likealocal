import MainPage from '../pages/main/MainPage'
import AuthPage from '../pages/auth/AuthPage'
import CityPage from '../pages/city/CityPage'
import ErrorPage from '../pages/error/ErrorPage'

export enum Routes {
  MAIN = '/',
  AUTH = '/auth',
  CITY = '/city/:id'
}

export const RoutesApp = () => {
  return [
    { path: Routes.MAIN, element: <MainPage /> },
    { path: Routes.AUTH, element: <AuthPage /> },
    { path: Routes.CITY, element: <CityPage /> },
    { path: '*', element: <ErrorPage /> }
  ]
}
