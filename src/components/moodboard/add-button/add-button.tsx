import * as React from 'react';
import { IconSquarePlus } from '@tabler/icons';
import './add-button.scss';
import { useDispatch } from 'react-redux';
import { asyncAddGroup } from '../../../store/actions/groups/groups-thunk-actions';

const AddButton = () => {
  const dispatch = useDispatch();

  const addCollection = () => {
    dispatch(asyncAddGroup());
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
