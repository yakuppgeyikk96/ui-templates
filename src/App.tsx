import RootLayout from './components/root-layout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<div>Dashboard</div>} />
      <Route path='auth/basic1' element={<div>Basic-1</div>} />
      <Route path='pages' element={<div>Pages</div>} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
