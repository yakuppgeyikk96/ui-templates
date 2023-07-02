import RootLayout from "./components/root-layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import LoginPage1 from "./pages/login-page-1";
import LoginPage2 from "./pages/login-page-2";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<div>Dashboard</div>} />
      <Route path="auth">
        <Route path="demo1" element={<LoginPage1 />} />
        <Route path="demo2" element={<LoginPage2 />} />
      </Route>
      <Route path="pages" element={<div>Pages</div>} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
