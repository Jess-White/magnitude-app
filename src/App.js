import './App.css';
import React from 'react';
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
// import GridMap from "./components/GridMap";


function App() {
  return (
    <div>
      <Header />
      {/*<GridMap />*/}
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
