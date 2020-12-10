import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Database from './pages/Database';
import FlashSales from './pages/FlashSales';
import Competition from './pages/Competition';
import KeywordPlanner from './pages/KeywordPlanner';

function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home}/>  
        <Route path='/database'  component={Database}/>  
        <Route path='/keyword-planner'  component={KeywordPlanner}/>  
        <Route path='/comp' component={Competition}/* I dont know why this isnt working *//>  
        <Route path='/flash-sales'  component={FlashSales}/>  
      </Switch>
    </Router>
      </>
    
  );
}

export default App;
