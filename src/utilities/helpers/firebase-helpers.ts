import { version as uuidVersion, validate as uuidValidate } from 'uuid';
import { TBookmarksGroupFirebaseData, TGroupsOrderFirebaseData } from '../types/firebase-types';
import EViewType from '../enums/collection';
import { firestore } from '../../firebase';
import { TBookmarksGroupData, TBookmarksGroups, TGroupsOrder } from '../types/moodboard-types';

export const dbConstants = {
  bookmarksGroups: 'bookmarks-groups',
  groupsOrder: 'groups-order',
};

export const baseData: TBookmarksGroupFirebaseData = {
  name: '',
  view: EViewType.small,
  visible: true,
  bookmarks: [],
};

const createGroupDoc = (id: string): TBookmarksGroupData => ({
  id,
  ...baseData,
});

function uuidValidateV4(uuid: string) {
  return uuidValidate(uuid) && uuidVersion(uuid) === 4;
}

/**
 * @returns New collection
 */
export const dbGetCollection = async (): Promise<TBookmarksGroups> => {
  const bookmarksGroupsRef = firestore.collection(dbConstants.bookmarksGroups);
  const newGroups: TBookmarksGroups = {};

  await bookmarksGroupsRef.get().then(async (bookmarksGroupsSnapshot) => {
    bookmarksGroupsSnapshot.forEach((bookmarksGroupSnapshot) => {
      newGroups[bookmarksGroupSnapshot.id] = {
        id: bookmarksGroupSnapshot.id,
        name: bookmarksGroupSnapshot.data().name,
        view: bookmarksGroupSnapshot.data().view,
        visible: bookmarksGroupSnapshot.data().visible,
        bookmarks: bookmarksGroupSnapshot.data().bookmarks,
      };
    });
  });

  return newGroups;
};

export const dbGetGroupsOrder = async (): Promise<TGroupsOrder> => {
  const groupsOrderRef = firestore.collection(dbConstants.groupsOrder).doc('user-name');
  let groupsOrder: TGroupsOrder = [];

  await groupsOrderRef.get().then(async (groupsOrderSnapshot) => {
    groupsOrder = [...(groupsOrderSnapshot.data() as TGroupsOrderFirebaseData).groups];
  });

  return groupsOrder;
};

export const dbSetGroupsOrder = async (groupsId: string[]): Promise<void> =>
  firestore.collection(dbConstants.groupsOrder).doc('user-name').update({
    groups: groupsId,
  });

export const dbAddCollection = async (id: string): Promise<TBookmarksGroupData> => {
  if (!uuidValidateV4(id)) {
    throw Error('Do not change id!');
  }

  return firestore
    .collection(dbConstants.bookmarksGroups)
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
  firestore.collection(dbConstants.bookmarksGroups).doc(id).delete();

export const dbUpdateGroupView = async (id: string, view: EViewType): Promise<void> =>
  firestore.collection(dbConstants.bookmarksGroups).doc(id).update({
    view,
  });

export const dbUpdateGroupName = async (id: string, name: string): Promise<void> =>
  firestore.collection(dbConstants.bookmarksGroups).doc(id).update({
    name,
  });

export const dbUpdateBookmarksVisibility = async (id: string, visible: boolean): Promise<void> =>
  firestore.collection(dbConstants.bookmarksGroups).doc(id).update({
    visible,
  });
