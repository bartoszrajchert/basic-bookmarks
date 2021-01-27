import { ICollections } from '../types/firebase-types';
import EViewType from '../enums/collection';
import { firestore } from '../../firebase';
import { ICollectionDocument } from '../types/moodboard-types';

/**
 * @returns New collection
 */
export const dbGetCollection = async () => {
  const collectionsRef = firestore.collection('collections');
  const newCollection: ICollectionDocument[] = [];

  await collectionsRef.get().then(async (collectionsSnapshot) => {
    collectionsSnapshot.forEach((collection) => {
      newCollection.push({
        name: collection.data().name,
        view: collection.data().view,
        id: collection.id,
        bookmarks: collection.data().bookmarks,
      });
    });
  });

  return newCollection;
};

export const dbAddCollection = () => {
  const baseData: ICollections = {
    name: '',
    view: EViewType.small,
    bookmarks: [],
  };

  firestore.collection('collections').add({
    ...baseData,
  });
};
