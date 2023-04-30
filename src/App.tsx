import RootLayout from './components/root-layout'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import LoginPage1 from './pages/login-page-1'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<div>Dashboard</div>} />
      <Route path='auth/basic1' element={<LoginPage1 />} />
      <Route path='pages' element={<div>Pages</div>} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
