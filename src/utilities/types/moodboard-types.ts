import { TBookmarksGroupFirebaseData } from './firebase-types';

export type TBookmarksGroups = {
  [key: string]: TBookmarksGroupData;
};

export type TBookmarksGroupData = TBookmarksGroupFirebaseData & {
  id: string;
};

export type TGroupsOrder = string[];
