import React, { Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import AuthRoute from './components/auth/AuthRoute';
import PrivateRoute from './components/auth/PrivateRoute';
import Loader from './components/common/Loader';

import './assets/App.css';
import './assets/index.css';

const Auth = React.lazy(() => import('./pages/Auth'));
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <IntlProvider locale="en">
     
        <CssBaseline />
          <BrowserRouter>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <AuthRoute>
                      <Auth />
                    </AuthRoute>
                  }
                />
                <Route
                  path="/home"
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </Suspense>
          </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
