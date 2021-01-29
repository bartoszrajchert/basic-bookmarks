import React from 'react';
import './App.css';
import Navbar from '../components/navbar';
import Moodboard from '../components/moodboard';
import useInitializeCollections from '../utilities/hooks/firebase/use-initialize-colllections';
import AddButton from '../components/add-button';

function App() {
  useInitializeCollections();

  return (
    <div className="App">
      <Navbar />
      <Moodboard />
      <AddButton />
    </div>
  );
}

export default App;
