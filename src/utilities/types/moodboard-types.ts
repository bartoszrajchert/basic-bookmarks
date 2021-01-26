export type ICollectionDocument = {
  id: string;
  name: string;
  view: number;
  bookmarks: IBookmarkData[];
};

export type IBookmarkData = {
  name: string;
  url: string;
};
