import React from 'react';
import Moodboard from 'components/moodboard';
import Navbar from 'components/navbar';
import AddButton from 'components/moodboard/add-button';
import useInitializeCollections from 'utilities/hooks/use-initialize-colllections';

const App = () => {
  useInitializeCollections();

  return (
    <div className="App">
      <Navbar />
      <Moodboard />
      <AddButton />
    </div>
  );
};

export default App;
