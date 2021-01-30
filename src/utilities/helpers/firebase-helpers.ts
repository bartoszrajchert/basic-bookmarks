import { IBookmarksGroup } from '../types/firebase-types';
import EViewType from '../enums/collection';
import { firestore } from '../../firebase';
import { IBookmarksGroupsDoc } from '../types/moodboard-types';

export const dbConstants = {
  mainCollection: 'bookmarks-groups',
};

/**
 * @returns New collection
 */
export const dbGetCollection = async () => {
  const bookmarksGroupsRef = firestore
    .collection(dbConstants.mainCollection)
    .orderBy('position', 'asc')
    .orderBy('name', 'asc');
  const newGroups: IBookmarksGroupsDoc[] = [];

  await bookmarksGroupsRef.get().then(async (bookmarksGroupsSnapshot) => {
    bookmarksGroupsSnapshot.forEach((bookmarksGroupSnapshot) => {
      newGroups.push({
        id: bookmarksGroupSnapshot.id,
        position: bookmarksGroupSnapshot.data().position,
        name: bookmarksGroupSnapshot.data().name,
        view: bookmarksGroupSnapshot.data().view,
        bookmarks: bookmarksGroupSnapshot.data().bookmarks,
      });
    });
  });

  return newGroups;
};

export const dbAddCollection = async () => {
  const baseData: IBookmarksGroup = {
    name: '',
    position: 0,
    view: EViewType.small,
    bookmarks: [],
  };

  return firestore
    .collection(dbConstants.mainCollection)
    .add({
      ...baseData,
    })
    .then(() =>
      dbGetCollection().then((newGroups) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return newGroups;
      }),
    );
};

export const dbDeleteGroup = async (id: string) =>
  firestore.collection(dbConstants.mainCollection).doc(id).delete();

export const dbUpdateGroupView = async (id: string, view: EViewType) =>
  firestore.collection(dbConstants.mainCollection).doc(id).update({
    view,
  });

export const dbUpdateGroupName = async (id: string, name: string) =>
  firestore.collection(dbConstants.mainCollection).doc(id).update({
    name,
  });
