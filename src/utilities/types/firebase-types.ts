import EViewType from '../enums/collection';

export type TBookmarksGroupFirebaseData = {
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
