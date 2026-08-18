import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import IncidentDetail from './pages/IncidentDetail';
import DispatchCenter from './pages/DispatchCenter';
import ResponderMap from './pages/ResponderMap';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/incident/:id"
          element={isAuthenticated ? <IncidentDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="/dispatch"
          element={isAuthenticated ? <DispatchCenter /> : <Navigate to="/login" />}
        />
        <Route
          path="/map"
          element={isAuthenticated ? <ResponderMap /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
};

export default App;