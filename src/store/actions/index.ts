import { IBookmarksGroupsDoc } from '../../utilities/types/moodboard-types';
import EViewType from '../../utilities/enums/collection';

export enum EGroupsActions {
  GROUP_FETCH_SUCCESS = 'GROUP_FETCH_SUCCESS',
  SWAP_GROUPS = 'SWAP_GROUPS',
  ADD_GROUP = 'ADD_GROUP',
  UPDATE_GROUPS = 'UPDATE_GROUPS',
  DELETE_GROUP = 'DELETE_GROUP',
  CHANGE_GROUP_VIEW_TYPE = 'CHANGE_GROUP_VIEW_TYPE',
  CHANGE_GROUP_VISIBILITY = 'CHANGE_GROUP_VISIBILITY',
  CHANGE_GROUP_NAME = 'CHANGE_GROUP_NAME',
}

export type Action = {
  type: EGroupsActions;
  payload: any;
};

export const groupsFetchedAction = (groups: IBookmarksGroupsDoc[]): Action => ({
  type: EGroupsActions.GROUP_FETCH_SUCCESS,
  payload: groups,
});

export const swapGroupsAction = (oldIndex: number, newIndex: number): Action => ({
  type: EGroupsActions.SWAP_GROUPS,
  payload: {
    oldIndex,
    newIndex,
  },
});

export const addGroupAction = (newGroup: IBookmarksGroupsDoc): Action => ({
  type: EGroupsActions.ADD_GROUP,
  payload: {
    newGroup,
  },
});

export const updateGroupsAction = (newGroups: IBookmarksGroupsDoc[]): Action => ({
  type: EGroupsActions.UPDATE_GROUPS,
  payload: {
    newGroups,
  },
});

export const deleteGroupAction = (id: string): Action => ({
  type: EGroupsActions.DELETE_GROUP,
  payload: {
    id,
  },
});

export const changeGroupViewTypeAction = (id: string, view: EViewType): Action => ({
  type: EGroupsActions.CHANGE_GROUP_VIEW_TYPE,
  payload: {
    id,
    view,
  },
});

export const changeGroupVisibility = (id: string, visible: boolean): Action => ({
  type: EGroupsActions.CHANGE_GROUP_VISIBILITY,
  payload: {
    id,
    visible,
  },
});

export const changeGroupName = (id: string, name: string): Action => ({
  type: EGroupsActions.CHANGE_GROUP_NAME,
  payload: {
    id,
    name,
  },
});
