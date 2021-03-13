import * as React from 'react';
import facebook from '../../../../assets/facebook.png';
import EViewType from '../../../../utilities/enums/collection';
import BookmarkIcon from './bookmark-icon';
import { TBookmarkDataFirebase } from '../../../../utilities/types/moodboard-types';

type BookmarkProps = {
  type: EViewType;
  data: TBookmarkDataFirebase;
  attributes?: any;
  listeners?: any;
  className?: string;
};

const largeBookmark = (data: TBookmarkDataFirebase) => (
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

const smallBookmark = (data: TBookmarkDataFirebase) => (
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
