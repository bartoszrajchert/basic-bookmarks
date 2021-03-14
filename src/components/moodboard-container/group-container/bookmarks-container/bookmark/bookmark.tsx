import * as React from 'react';
import EViewType from 'utilities/enums/collection';
import { TBookmarkData } from 'utilities/types/moodboard-types';
import SmallBookmark from 'components/moodboard-container/group-container/bookmarks-container/bookmark/bookmark.small';
import LargeBookmark from 'components/moodboard-container/group-container/bookmarks-container/bookmark/bookmark.large';
import facebook from 'assets/facebook.png';

type BookmarkProps = {
  type: EViewType;
  data: TBookmarkData;
  attributes?: any;
  listeners?: any;
  className?: string;
};

const icon = <img src={facebook} alt="Facebook logo" height={40} width={40} />;

const Bookmark = ({ data, type, attributes, listeners, className }: BookmarkProps) => (
  <div {...attributes} {...listeners} className={className}>
    {type === EViewType.large ? (
      <LargeBookmark name={data.name} iconElement={icon} />
    ) : (
      <SmallBookmark name={data.name} iconElement={icon} />
    )}
  </div>
);

Bookmark.defaultProps = {
  attributes: [],
  listeners: [],
  className: '',
};

export default Bookmark;
