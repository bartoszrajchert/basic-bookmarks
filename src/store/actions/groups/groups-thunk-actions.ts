import { v4 as uuidv4 } from 'uuid';
import { TThunk } from '../../../utilities/types/redux-types';
import { addGroupAction, deleteGroupAction, groupsFetchedAction } from './groups-actions';
import {
  dbAddGroup,
  dbDeleteGroup,
  dbGetGroup,
  dbSetGroupsOrder,
} from '../../../api/firebase';
import { addGroupToOrderAction, setGroupsOrderAction } from './order/groups-order-actions';

export const thunkDeleteGroup = (id: string): TThunk => (dispatch, getState) => {
  const { order } = getState();
  const deletedGroupIndex = order.indexOf(id);
  order.splice(deletedGroupIndex, 1);

  dispatch(setGroupsOrderAction(order));
  dispatch(deleteGroupAction(id));

  dbSetGroupsOrder(order).then();
  dbDeleteGroup(id).then();
};

/**
 * Fetch asynchronously all groups of the user.
 */
export const asyncFetchGroups = (): TThunk => async (dispatch) =>
  dbGetGroup().then((newGroups) => {
    const { groups } = newGroups;
    let { order } = newGroups;
    const areLengthsSame = Object.keys(newGroups.groups).length !== newGroups.order.length;

    if (areLengthsSame) {
      // eslint-disable-next-line no-console
      console.error('INTEGRATION FAILED - RESETTING ORDER');

      order = Object.keys(groups);
      dbSetGroupsOrder(order).then();
    }

    dispatch(setGroupsOrderAction(order));
    dispatch(groupsFetchedAction(groups));
  });

export const asyncAddGroup = (): TThunk => async (dispatch, getState) =>
  dbAddGroup(uuidv4()).then((newGroup) => {
    const { order } = getState();

    dispatch(addGroupAction(newGroup));
    dispatch(addGroupToOrderAction(newGroup.id));

    dbSetGroupsOrder([newGroup.id, ...order]);
  });
