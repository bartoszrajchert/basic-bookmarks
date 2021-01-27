export type ICollections = {
  name: string;
  view: number;
  bookmarks: IBookmarkData[];
};

export type IBookmarkData = {
  name: string;
  url: string;
};
