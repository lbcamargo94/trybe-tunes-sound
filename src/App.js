import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavigationRoutes from './routes'
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <NavigationRoutes />
    </BrowserRouter>
  );
}

export default App;