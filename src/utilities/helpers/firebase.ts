import firebase from 'firebase';
import { TGroupFirebaseData, TUserData } from '../types/moodboard-types';
import { firestore } from '../../firebase';
import uuidValidateV4 from './uuid';
import EViewType from '../enums/collection';

const userId = 'user-name';

const dbConstants = {
  groups: 'groups',
};

const createGroupDoc = (id: string): TGroupFirebaseData => ({
  id,
  name: '',
  view: EViewType.small,
  visible: true,
  bookmarks: [],
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

export const dbAddGroup = async (id: string): Promise<TGroupFirebaseData> => {
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
