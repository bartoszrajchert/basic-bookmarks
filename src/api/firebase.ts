import firebase from 'firebase';
import uuidValidateV4 from 'utilities/helpers/uuid';
import EViewType from 'utilities/enums/collection';
import { TBookmarkData, TGroup, TUserData } from 'utilities/types/moodboard-types';
import { firestore } from 'firebase-config';

const userId = 'user-name';

const dbConstants = {
  groups: 'groups',
};

const createBookmarkDoc = (id: string, name: string): TBookmarkData => ({
  id,
  name,
  icon: 'icon_url',
  url: 'url',
});

const createGroupDoc = (id: string): TGroup => ({
  id,
  name: '',
  view: EViewType.small,
  visible: true,
  bookmarks: {
    data: {
      'test-bookmark': createBookmarkDoc('test-bookmark', 'FACEBOOK'),
      'test-2': createBookmarkDoc('test-2', 'Insta'),
    },
    order: ['test-bookmark', 'test-2'],
  },
});

export const dbGetGroup = async (): Promise<TUserData> => {
  const groupsRef = firestore.collection(dbConstants.groups).doc(userId);
  let newGroups: TUserData = {
    groups: {},
    order: [],
  };

  await groupsRef.get().then(async (groupsSnapshot) => {
    newGroups = groupsSnapshot.data() as TUserData;
  });

  return newGroups;
};

export const dbSetGroupsOrder = async (groupsIds: string[]): Promise<void> =>
  firestore.collection(dbConstants.groups).doc(userId).update({
    order: groupsIds,
  });

export const dbAddGroup = async (id: string): Promise<TGroup> => {
  if (!uuidValidateV4(id)) {
    throw Error('Do not change id!');
  }

  return firestore
    .collection(dbConstants.groups)
    .doc(userId)
    .update({
      [`groups.${id}`]: createGroupDoc(id),
    })
    .then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return createGroupDoc(id);
    });
};

export const dbDeleteGroup = async (id: string): Promise<void> =>
  firestore
    .collection(dbConstants.groups)
    .doc(userId)
    .update({
      [`groups.${id}`]: firebase.firestore.FieldValue.delete(),
    });

export const dbUpdateGroupView = async (id: string, view: EViewType): Promise<void> =>
  firestore
    .collection(dbConstants.groups)
    .doc(userId)
    .update({
      [`groups.${id}.view`]: view,
    });

export const dbUpdateGroupName = async (id: string, name: string): Promise<void> =>
  firestore
    .collection(dbConstants.groups)
    .doc(userId)
    .update({
      [`groups.${id}.name`]: name,
    });

export const dbUpdateBookmarksVisibility = async (id: string, visible: boolean): Promise<void> =>
  firestore
    .collection(dbConstants.groups)
    .doc(userId)
    .update({
      [`groups.${id}.visible`]: visible,
    });

export const dbUpdateBookmarksOrder = async (id: string, bookmarksIds: string[]): Promise<void> =>
  firestore
    .collection(dbConstants.groups)
    .doc(userId)
    .update({
      [`groups.${id}.bookmarks.order`]: bookmarksIds,
    });
