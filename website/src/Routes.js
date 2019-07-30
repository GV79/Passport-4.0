import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage.jsx'
import Dashboard from './pages/Dashboard.jsx'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => {return <Homepage />}} />
      <Route path="/dashboard" render={() => {return <Dashboard />}} />
    </BrowserRouter>
  );
}

export default App;