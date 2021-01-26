import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Collection from './collection';
import AddButton from './add-button';
import { firestore } from '../../firebase';
import { ICollectionDocument } from '../../utilities/types/moodboard-types';
import collectionsState from '../../store/moodboard-store';

const addCollection = () => {
  console.log('add');
};

const Moodboard = () => {
  const [initialized, setInitialized] = useState(false);
  const [collections, setCollections] = useRecoilState(collectionsState);

  useEffect(() => {
    if (initialized) {
      return;
    }

    const collectionsRef = firestore.collection('collections');

    collectionsRef.get().then(async (collectionsSnapshot) => {
      collectionsSnapshot.forEach((collection) => {
        setCollections((oldCollection) => [
          ...oldCollection,
          {
            name: collection.data().name,
            view: collection.data().view,
            id: collection.id,
            bookmarks: collection.data().bookmarks,
          },
        ]);
      });
    });

    setInitialized(true);
  }, [initialized, setCollections]);

  return collections.length === 0 ? (
    <p className="align-middle text-center">Loading...</p>
  ) : (
    <div>
      {collections.map((collection: ICollectionDocument) => (
        <Collection key={collection.id} data={collection} />
      ))}
      <AddButton onClick={() => addCollection()} />
    </div>
  );
};

export default Moodboard;
