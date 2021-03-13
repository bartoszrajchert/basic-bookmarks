import React from 'react';
import MoodboardContainer from 'components/moodboard-container';
import Navbar from 'components/navbar';
import AddButton from 'components/moodboard-container/add-button';
import useInitializeCollections from 'utilities/hooks/use-initialize-colllections';

const App = () => {
  useInitializeCollections();

  return (
    <div className="App">
      <Navbar />
      <MoodboardContainer />
      <AddButton />
    </div>
  );
};

export default App;
