import React from 'react';
import './App.css';
import Navbar from '../components/navbar';
import Collection from '../components/collection';
import AddButton from '../components/add-button';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Collection />
      <Collection />
      <Collection />
      <AddButton onClick={() => console.log('clicked')}/>
    </div>
  );
}

export default App;
