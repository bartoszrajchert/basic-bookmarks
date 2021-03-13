import EViewType from '../enums/collection';

export type TGroupFirebase = {
  id: string;
  name: string;
  view: EViewType;
  visible: boolean;
  bookmarks: TBookmarksFirebase;
};

export type TBookmarksFirebase = {
  data: TBookmarks;
  order: string[];
};

export type TBookmarkDataFirebase = {
  id: string;
  name: string;
  icon: string;
  url: string;
};

export type TGroupsOrderFirebaseData = {
  groups: string[];
};

export type TGroups = {
  [key: string]: TGroupFirebase;
};

export type TBookmarks = {
  [key: string]: TBookmarkDataFirebase;
};

export type TGroupsOrder = string[];

export type TUserData = {
  groups: TGroups;
  order: TGroupsOrder;
};
