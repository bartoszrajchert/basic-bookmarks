import { version as uuidVersion, validate as uuidValidate } from 'uuid';
import { IBookmarksGroup } from '../types/firebase-types';
import EViewType from '../enums/collection';
import { firestore } from '../../firebase';
import { IBookmarksGroupsDoc } from '../types/moodboard-types';

export const dbConstants = {
  mainCollection: 'bookmarks-groups',
};

export const baseData: IBookmarksGroup = {
  name: '',
  position: 0,
  view: EViewType.small,
  visible: true,
  bookmarks: [],
};

const createGroupDoc = (id: string): IBookmarksGroupsDoc => ({
  id,
  ...baseData,
});

function uuidValidateV4(uuid: string) {
  return uuidValidate(uuid) && uuidVersion(uuid) === 4;
}

/**
 * @returns New collection
 */
export const dbGetCollection = async (): Promise<IBookmarksGroupsDoc[]> => {
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
        visible: bookmarksGroupSnapshot.data().visible,
        bookmarks: bookmarksGroupSnapshot.data().bookmarks,
      });
    });
  });

  return newGroups;
};

export const dbAddCollection = async (id: string): Promise<IBookmarksGroupsDoc> => {
  if (!uuidValidateV4(id)) {
    throw Error('Do not change id!');
  }

  return firestore
    .collection(dbConstants.mainCollection)
    .doc(id)
    .set({
      ...baseData,
    })
    .then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return createGroupDoc(id);
    });
};

export const dbDeleteGroup = async (id: string): Promise<void> =>
  firestore.collection(dbConstants.mainCollection).doc(id).delete();

export const dbUpdateGroupView = async (id: string, view: EViewType): Promise<void> =>
  firestore.collection(dbConstants.mainCollection).doc(id).update({
    view,
  });

export const dbUpdateGroupName = async (id: string, name: string): Promise<void> =>
  firestore.collection(dbConstants.mainCollection).doc(id).update({
    name,
  });

export const dbUpdateBookmarksVisibility = async (id: string, visible: boolean): Promise<void> =>
  firestore.collection(dbConstants.mainCollection).doc(id).update({
    visible,
  });
