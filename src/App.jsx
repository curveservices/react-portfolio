import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider, 
} from 'react-router-dom';

import Layout from './components/Layout'
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Route>
  ),
);
    
function App() {
  return <RouterProvider router={router} />;
}

export default App
