import React, { Suspense } from 'react';
import { Container, CircularProgress, Box } from '@mui/material';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Login from './components/Login';
import Navbar from './components/Navbar';

// Lazy load feature components
const Landing = React.lazy(() => import('./features/Landing'));
const Chat = React.lazy(() => import('./features/Chat'));

const MyProfile = React.lazy(() => import('./features/MyProfile'));

const Settings = React.lazy(() => import('./features/Settings'));

// Loading fallback component
const LoadingFallback = () => (
  <Box
    display='flex'
    justifyContent='center'
    alignItems='center'
    minHeight='60vh'
  >
    <CircularProgress size={40} />
  </Box>
);

function AppRoutes() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path='/*'
            element={
              <>
                <Navbar />
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/chat' element={<Chat />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/my-profile' element={<MyProfile />} />
                    <Route path='*' element={<Navigate to='/' replace />} />
                  </Routes>
                </Suspense>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRoutes;
