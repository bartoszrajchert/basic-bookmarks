import { v4 as uuidv4 } from 'uuid';
import { TThunk } from 'utilities/types/redux-types';
import {
  dbAddBookmark,
  dbAddGroup,
  dbDeleteGroup,
  dbGetGroup,
  dbSetGroupsOrder,
  dbUpdateBookmarksOrder,
} from 'api/firebase';
import {
  addGroupToOrderAction,
  setGroupsOrderAction,
} from 'store/actions/groups/order/groups-order-actions';
import {
  addBookmark,
  addGroupAction,
  changeBookmarksOrder,
  deleteGroupAction,
  groupsFetchedAction,
} from 'store/actions/groups/groups-actions';

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

export const asyncAddBookmark = (idGroup: string, bookmarkName: string): TThunk => async (
  dispatch,
  getState,
) =>
  dbAddBookmark(idGroup, uuidv4(), bookmarkName).then((bookmarkData) => {
    const { groups } = getState();
    const newBookmarksOrder = [...groups[idGroup].bookmarks.order, bookmarkData.bookmark.id];

    dispatch(addBookmark(idGroup, bookmarkData.bookmark));
    dispatch(changeBookmarksOrder(idGroup, newBookmarksOrder));

    dbUpdateBookmarksOrder(idGroup, newBookmarksOrder);
  });
