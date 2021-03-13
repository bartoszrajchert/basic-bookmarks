import { TBookmarkData } from 'utilities/types/moodboard-types';
import BookmarkIcon from 'components/moodboard/collection/bookmarks-container/bookmark/bookmark-icon';
import facebook from 'assets/facebook.png';
import * as React from 'react';

type LargeBookmarkProps = {
  data: TBookmarkData;
};

const LargeBookmark = ({ data }: LargeBookmarkProps) => (
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

export default LargeBookmark;
