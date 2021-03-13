import * as React from 'react';
import EViewType from 'utilities/enums/collection';
import { TBookmarkData } from 'utilities/types/moodboard-types';
import BookmarkIcon from 'components/moodboard/collection/bookmark/bookmark-icon';
import facebook from 'assets/facebook.png';

type BookmarkProps = {
  type: EViewType;
  data: TBookmarkData;
  attributes?: any;
  listeners?: any;
  className?: string;
};

const largeBookmark = (data: TBookmarkData) => (
  <div
    className="bg-black-800 rounded-base p-12 flex items-center cursor-pointer"
    style={{ width: '180px' }}
  >
    <BookmarkIcon img={facebook} alt="Facebook logo" />
    <div className="ml-16">
      <p className="text-sm">{data.name}</p>
    </div>
  </div>
);

const smallBookmark = (data: TBookmarkData) => (
  <div className="flex flex-col items-center cursor-pointer">
    <BookmarkIcon img={facebook} alt="Facebook logo" />
    <div className="mt-8">
      <p className="text-sm">{data.name}</p>
    </div>
  </div>
);

const Bookmark = ({ data, type, attributes, listeners, className }: BookmarkProps) => (
  <div {...attributes} {...listeners} className={className}>
    {type === EViewType.large ? largeBookmark(data) : smallBookmark(data)}
  </div>
);

Bookmark.defaultProps = {
  attributes: [],
  listeners: [],
  className: '',
};

export default Bookmark;
