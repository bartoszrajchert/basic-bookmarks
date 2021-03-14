import BookmarkIcon from 'components/moodboard-container/group-container/bookmarks-container/bookmark/bookmark-icon';
import * as React from 'react';
import { TablerIcon } from '@tabler/icons';

type SmallBookmarkProps = {
  name: string;
  iconElement: React.ReactElement<HTMLImageElement> | TablerIcon;
};

const SmallBookmark = ({ name, iconElement }: SmallBookmarkProps) => (
  <div className="flex flex-col items-center cursor-pointer">
    <BookmarkIcon iconElement={iconElement} />
    <div className="mt-8">
      <p className="text-sm">{name}</p>
    </div>
  </div>
);

export default SmallBookmark;
