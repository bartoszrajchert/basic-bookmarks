import React from 'react';
import { useRecoilState } from 'recoil';
import Collection from './collection';
import AddButton from './add-button';
import { ICollectionDocument } from '../../utilities/types/moodboard-types';
import collectionsState from '../../store/moodboard-store';
import { dbAddCollection, dbGetCollection } from '../../utilities/helpers/firebase-helpers';

const Moodboard = () => {
  const [collections, setCollections] = useRecoilState(collectionsState);

  const addCollection = () => {
    dbAddCollection();
    dbGetCollection().then((newCollection) => setCollections(newCollection));
  };

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
