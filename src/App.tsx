import React, { Suspense, lazy, useEffect } from 'react';
import './styles/app.scss';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { fetchData } from './redux/actions/dataResponseActions';
import { useAppDispatch } from './hooks/hooks';
import Loader from './components/Loader';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const ResponseTimes = lazy(() => import('./pages/ResponseTimes'));
const UsageStatistics = lazy(() => import('./pages/UsageStatistics'));
const UserSatisfaction = lazy(() => import('./pages/UserSatisfaction'));


function App() {

  // Fetch data on component mount using useEffect and dispatch
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData());  
  }, [dispatch])
  
  
  return (
   <Router>
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/home" element={<Dashboard/>} />
      <Route path="/response-times" element={<ResponseTimes/>} />
      <Route path="/usage-statistics" element={<UsageStatistics/>} />
      <Route path="/user-satisfaction" element={<UserSatisfaction/>} />
    </Routes>
    </Suspense>
   </Router>
  );
}

export default App;
