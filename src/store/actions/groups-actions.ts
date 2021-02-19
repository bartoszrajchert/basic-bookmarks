import { v4 as uuidv4 } from 'uuid';
import { TBookmarksGroups, TGroupFirebaseData } from '../../utilities/types/moodboard-types';
import EViewType from '../../utilities/enums/collection';
import { dbAddGroup, dbGetGroup, dbSetGroupsOrder } from '../../utilities/helpers/firebase';
import { addGroupToOrderAction, setGroupsOrderAction } from './groups-order-actions';
import { TThunk, TAction } from '../../utilities/types/redux-types';

export enum EGroupsActions {
  GROUP_SET = 'GROUP_SET',
  GROUP_ADD = 'GROUP_ADD',
  GROUP_DELETE = 'GROUP_DELETE',
  GROUP_CHANGE_VIEW_TYPE = 'GROUP_CHANGE_VIEW_TYPE',
  GROUP_CHANGE_VISIBILITY = 'GROUP_CHANGE_VISIBILITY',
  GROUP_CHANGE_NAME = 'GROUP_CHANGE_NAME',
}

const groupsFetchedAction = (groups: TBookmarksGroups): TAction<EGroupsActions> => ({
  type: EGroupsActions.GROUP_SET,
  payload: groups,
});

const addGroupAction = (newGroup: TGroupFirebaseData): TAction<EGroupsActions> => ({
  type: EGroupsActions.GROUP_ADD,
  payload: {
    newGroup,
  },
});

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

export const deleteGroupAction = (id: string): TAction<EGroupsActions> => ({
  type: EGroupsActions.GROUP_DELETE,
  payload: {
    id,
  },
});

export const changeGroupViewTypeAction = (
  id: string,
  view: EViewType,
): TAction<EGroupsActions> => ({
  type: EGroupsActions.GROUP_CHANGE_VIEW_TYPE,
  payload: {
    id,
    view,
  },
});

export const changeGroupVisibility = (id: string, visible: boolean): TAction<EGroupsActions> => ({
  type: EGroupsActions.GROUP_CHANGE_VISIBILITY,
  payload: {
    id,
    visible,
  },
});

export const changeGroupName = (id: string, name: string): TAction<EGroupsActions> => ({
  type: EGroupsActions.GROUP_CHANGE_NAME,
  payload: {
    id,
    name,
  },
});
