import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationRoutes from './routes'
import './styles/App.css';

function App() {
  return (
    <Router>
      <NavigationRoutes />
    </Router>
  );
}

export default App;