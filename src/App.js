import './App.css';
import React from 'react';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
// import Search from './components/Search';

function App() {
  return (
    <div>
      <Header />
      {/* <Search /> */}
      <Dashboard />
    </div>
  );
}

export default App;
