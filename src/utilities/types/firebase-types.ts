import EViewType from '../enums/collection';

export type IBookmarksGroup = {
  name: string;
  position: number;
  view: EViewType;
  bookmarks: IBookmark[];
};

export type IBookmark = {
  name: string;
  url: string;
};
