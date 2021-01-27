import React from 'react';
import './App.css';
import Navbar from '../components/navbar';
import Moodboard from '../components/moodboard';
import useInitializeCollections from '../utilities/hooks/firebase/use-initialize-colllections';

function App() {
  useInitializeCollections();

  return (
    <div className="App">
      <Navbar />
      <Moodboard />
    </div>
  );
}

export default App;
