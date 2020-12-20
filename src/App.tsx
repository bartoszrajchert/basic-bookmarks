import React from 'react';
import { IconAward } from '@tabler/icons';
import './App.css';

function ChitChat() {
  return (
    <div className="py-8 px-8 max-w-sm mx-auto rounded-xl shadow space-y-2 bg-black-800 cursor-pointer transition-all duration-150 hover:bg-black-700">
      <IconAward size={24} />
      <h2>Read everyday</h2>
      <p>Forbes</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <ChitChat />
    </div>
  );
}

export default App;
