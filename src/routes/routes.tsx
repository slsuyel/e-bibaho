import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { routeGenerator } from '../utils/routesGenerator';

import Home from '../pages/home/Home/Home';

import OutSideLayout from '../components/layouts/OutSideLayout';

import Register from '../pages/Auth/Register';
import UserPrivate from './privateRoute/userPrivate';
import { adminPaths } from './adminRoute';
import SearchPage from '../pages/Search/SearchPage';
import UserLoggedLayout from '../components/layouts/UserLoggedLayout';
import Errorpage from '../components/ui/Errorpage';

import Help from '../pages/Help/Help';
import Pricing from '../pages/Pricing/Pricing';

import TopFive from '../pages/TopFive/TopFive';
import NewLogin from '../pages/Auth/NewLogin';
import About from '../pages/About/About';
import Blog from '../pages/About/Blog';
import Careers from '../pages/About/Careers';

import Contact from './../pages/home/Contact/Contact';
import OurMediator from '../pages/About/OurMediator';
import { userRoute } from './userRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <OutSideLayout />,
    errorElement: <Errorpage status={500} />,
    children: [
      {
        path: '/',
        element: <Home />,
      },

      {
        path: '/login',
        element: <NewLogin />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/search-res',
        element: <SearchPage />,
      },
      {
        path: '/help',
        element: <Help />,
      },

      {
        path: '/pricing',
        element: <Pricing />,
      },
      {
        path: '/top',
        element: <TopFive />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/careers',
        element: <Careers />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/mediator',
        element: <OurMediator />,
      },
    ],
  },

  {
    path: 'user',
    element: (
      <UserPrivate>
        <UserLoggedLayout />
      </UserPrivate>
    ),
    errorElement: <Errorpage status={500} />,
    children: userRoute,
  },
  {
    path: '/dashboard',
    element: <App />,
    children: routeGenerator(adminPaths),
  },
]);

export default router;
