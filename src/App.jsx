import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Projects from './pages/Projects.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: '/projects',
    element: <Projects />
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
