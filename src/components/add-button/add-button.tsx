import * as React from 'react';
import { IconSquarePlus } from '@tabler/icons';
import './add-button.scss';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { dbAddCollection } from '../../utilities/helpers/firebase-helpers';
import { addGroupAction } from '../../store/actions';
import { IBookmarksGroupsDoc } from '../../utilities/types/moodboard-types';

const AddButton = () => {
  const dispatch = useDispatch();
  const groups = useSelector<{ groups: IBookmarksGroupsDoc[] }, IBookmarksGroupsDoc[]>(
    (state) => state.groups,
  );

  const addCollection = () => {
    dbAddCollection(uuidv4(), groups[0].position + 1).then((newGroup) =>
      dispatch(addGroupAction(newGroup)),
    );
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
