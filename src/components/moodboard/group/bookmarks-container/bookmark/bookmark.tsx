import * as React from 'react';
import EViewType from 'utilities/enums/collection';
import { TBookmarkData } from 'utilities/types/moodboard-types';
import SmallBookmark from 'components/moodboard/group/bookmarks-container/bookmark/bookmark.small';
import LargeBookmark from 'components/moodboard/group/bookmarks-container/bookmark/bookmark.large';

type BookmarkProps = {
  type: EViewType;
  data: TBookmarkData;
  attributes?: any;
  listeners?: any;
  className?: string;
};

const Bookmark = ({ data, type, attributes, listeners, className }: BookmarkProps) => (
  <div {...attributes} {...listeners} className={className}>
    {type === EViewType.large ? <LargeBookmark data={data} /> : <SmallBookmark data={data} />}
  </div>
);

Bookmark.defaultProps = {
  attributes: [],
  listeners: [],
  className: '',
};

export default Bookmark;
