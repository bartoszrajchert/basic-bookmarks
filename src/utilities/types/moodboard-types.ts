import EViewType from '../enums/collection';

/**
 * Group data.
 */
export type TGroup = {
  id: string;
  name: string;
  view: EViewType;
  visible: boolean;
  bookmarks: TBookmarks;
};

/**
 * Information about bookmarks.
 */
export type TBookmarks = {
  data: TBookmarksObject;
  order: TOrder;
};

/**
 * Bookmarks data.
 */
export type TBookmarkData = {
  id: string;
  name: string;
  icon: string;
  url: string;
};

/**
 * User data.
 */
export type TUserData = {
  groups: TGroupsObject;
  order: TOrder;
};

/**
 * Groups object.
 * [id]: data
 */
export type TGroupsObject = {
  [key: string]: TGroup;
};

/**
 * Bookmarks object.
 * [id]: data
 */
export type TBookmarksObject = {
  [key: string]: TBookmarkData;
};

/**
 * Type for data order.
 */
export type TOrder = string[];
