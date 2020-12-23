import React from 'react';
import './App.css';
import Navbar from '../components/navbar';
import Collection from '../components/collection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Collection />
      <Collection />
      <Collection />
    </div>
  );
}

export default App;
