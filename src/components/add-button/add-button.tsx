import * as React from 'react';
import { IconSquarePlus } from '@tabler/icons';
import './add-button.scss';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addGroupAction } from '../../store/actions/groups-actions';
import { setGroupsOrderAction } from '../../store/actions/groups-order-actions';
import { TGroupsOrder } from '../../utilities/types/moodboard-types';
import { dbAddGroup, dbSetGroupsOrder } from '../../utilities/helpers/firebase';

const AddButton = () => {
  const dispatch = useDispatch();
  const orderGroups = useSelector<{ groupsOrder: TGroupsOrder }, TGroupsOrder>(
    (state) => state.groupsOrder,
  );

  const addCollection = () => {
    dbAddGroup(uuidv4()).then(async (newGroup) => {
      dispatch(addGroupAction(newGroup));

      await dbSetGroupsOrder([newGroup.id, ...orderGroups]);
      dispatch(setGroupsOrderAction([newGroup.id, ...orderGroups]));
    });
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
