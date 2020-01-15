import Home from './pages/Home';
import About from './pages/About';

const routes = [
  { Component: Home, params: { exact: true, path: '/' } },
  { Component: About, params: { path: '/about' } }
];

export default routes;
