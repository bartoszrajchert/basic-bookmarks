import * as React from 'react';
import facebook from '../../../../assets/facebook.png';
import EViewType from '../../../../utilities/enums/collection';
import BookmarkIcon from './bookmark-icon';

type BookmarkProps = {
  type: EViewType;
  attributes?: any;
  listeners?: any;
  className?: string;
};

const Bookmark = ({ type, attributes, listeners, className }: BookmarkProps) => {
  const largeBookmark = (
    <div
      className="bg-black-800 rounded-base p-12 flex items-center cursor-pointer"
      style={{ width: '180px' }}
    >
      <BookmarkIcon img={facebook} alt="Facebook logo" />
      <div className="ml-16">
        <p className="text-sm">Forbes</p>
      </div>
    </div>
  );

  const smallBookmark = (
    <div className="flex flex-col items-center cursor-pointer">
      <BookmarkIcon img={facebook} alt="Facebook logo" />
      <div className="mt-8">
        <p className="text-sm">Forbes</p>
      </div>
    </div>
  );

  return (
    <div {...attributes} {...listeners} className={className}>
      {type === EViewType.large ? largeBookmark : smallBookmark}
    </div>
  );
};

Bookmark.defaultProps = {
  attributes: [],
  listeners: [],
  className: '',
};

export default Bookmark;
