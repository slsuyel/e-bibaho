import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './styles/Styles.css';
import './styles/animation.css';
import router from './routes/routes';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import Cursor from './components/ui/Cursor';
import 'aos/dist/aos.css';
import { GoToTop } from 'go-to-top-react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <RouterProvider router={router} />
      <Cursor />
      <GoToTop />
    </Provider>
  </React.StrictMode>
);
