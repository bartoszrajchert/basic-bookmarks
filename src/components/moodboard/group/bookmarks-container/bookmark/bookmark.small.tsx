import { TBookmarkData } from 'utilities/types/moodboard-types';
import BookmarkIcon from 'components/moodboard/group/bookmarks-container/bookmark/bookmark-icon';
import facebook from 'assets/facebook.png';
import * as React from 'react';

type SmallBookmarkProps = {
  data: TBookmarkData;
};

const SmallBookmark = ({ data }: SmallBookmarkProps) => (
  <div className="flex flex-col items-center cursor-pointer">
    <BookmarkIcon img={facebook} alt="Facebook logo" />
    <div className="mt-8">
      <p className="text-sm">{data.name}</p>
    </div>
  </div>
);

export default SmallBookmark;
