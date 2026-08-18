import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import DispatchCenter from './pages/DispatchCenter';
import ResponderMap from './pages/ResponderMap';
import IncidentDetail from './pages/IncidentDetail';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/dispatch" element={<DispatchCenter />} />
          <Route path="/map" element={<ResponderMap />} />
          <Route path="/incident/:id" element={<IncidentDetail />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
