import * as React from 'react';
import EViewType from 'utilities/enums/collection';
import LargeBookmark from 'components/moodboard-container/group-container/bookmarks-container/bookmark/bookmark.large';
import SmallBookmark from 'components/moodboard-container/group-container/bookmarks-container/bookmark/bookmark.small';
import { IconSquarePlus } from '@tabler/icons';

type AddBookmarkButtonProps = {
  type: EViewType;
  addBookmark: () => void;
};

const icon = <IconSquarePlus size={40} stroke={1} />;

const AddBookmarkButton = ({ type, addBookmark }: AddBookmarkButtonProps) => (
  // eslint-disable-next-line jsx-a11y/click-events-have-key-events
  <div role="button" onClick={() => addBookmark()} tabIndex={0}>
    {type === EViewType.large ? (
      <LargeBookmark name="Add..." iconElement={icon} />
    ) : (
      <SmallBookmark name="Add..." iconElement={icon} />
    )}
  </div>
);

export default AddBookmarkButton;
