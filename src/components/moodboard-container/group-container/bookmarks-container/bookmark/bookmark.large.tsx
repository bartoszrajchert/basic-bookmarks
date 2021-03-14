import BookmarkIcon from 'components/moodboard-container/group-container/bookmarks-container/bookmark/bookmark-icon';
import * as React from 'react';
import { TablerIcon } from '@tabler/icons';

type LargeBookmarkProps = {
  name: string;
  iconElement: React.ReactElement<HTMLImageElement> | TablerIcon;
};

const LargeBookmark = ({ name, iconElement }: LargeBookmarkProps) => (
  <div
    className="bg-black-800 rounded-base p-12 flex items-center cursor-pointer"
    style={{ width: '180px' }}
  >
    <BookmarkIcon iconElement={iconElement} />
    <div className="ml-16">
      <p className="text-sm">{name}</p>
    </div>
  </div>
);

export default LargeBookmark;
