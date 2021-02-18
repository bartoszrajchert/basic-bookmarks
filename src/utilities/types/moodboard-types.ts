import EViewType from '../enums/collection';

export type TGroupFirebaseData = {
  id: string;
  name: string;
  view: EViewType;
  visible: boolean;
  bookmarks: TBookmarkFirebaseData[];
};

export type TBookmarkFirebaseData = {
  name: string;
  url: string;
};

export type TGroupsOrderFirebaseData = {
  groups: string[];
};

export type TBookmarksGroups = {
  [key: string]: TGroupFirebaseData;
};

export type TGroupsOrder = string[];

export type TUserData = {
  groups: TBookmarksGroups;
  order: TGroupsOrder;
};
