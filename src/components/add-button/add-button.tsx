import * as React from 'react';
import { IconSquarePlus } from '@tabler/icons';
import './add-button.scss';
import { useSetRecoilState } from 'recoil';
import { dbAddCollection } from '../../utilities/helpers/firebase-helpers';
import { bookmarksGroupsState } from '../../store/moodboard-store';

const AddButton = () => {
  const setBookmarksGroups = useSetRecoilState(bookmarksGroupsState);

  const addCollection = () => {
    dbAddCollection().then((newGroups) => setBookmarksGroups(newGroups));
  };

  return (
    <button
      type="button"
      className="add-button bg-black-900 rounded-5xl fixed right-32 bottom-32 py-12 w-64 h-64"
      onClick={addCollection}
    >
      <div className="add-button__content flex justify-center items-center opacity-40 transition-opacity">
        <IconSquarePlus size={24} />
      </div>
    </button>
  );
};

export default AddButton;
