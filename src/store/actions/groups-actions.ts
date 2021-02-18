import { TBookmarksGroups, TGroupFirebaseData } from '../../utilities/types/moodboard-types';
import EViewType from '../../utilities/enums/collection';

export enum EGroupsActions {
  GROUP_SET = 'GROUP_SET',
  GROUP_ADD = 'GROUP_ADD',
  GROUP_DELETE = 'GROUP_DELETE',
  GROUP_CHANGE_VIEW_TYPE = 'GROUP_CHANGE_VIEW_TYPE',
  GROUP_CHANGE_VISIBILITY = 'GROUP_CHANGE_VISIBILITY',
  GROUP_CHANGE_NAME = 'GROUP_CHANGE_NAME',
}

export type TGroupsAction = {
  type: EGroupsActions;
  payload: any;
};

export const groupsFetchedAction = (groups: TBookmarksGroups): TGroupsAction => ({
  type: EGroupsActions.GROUP_SET,
  payload: groups,
});

export const addGroupAction = (newGroup: TGroupFirebaseData): TGroupsAction => ({
  type: EGroupsActions.GROUP_ADD,
  payload: {
    newGroup,
  },
});

export const deleteGroupAction = (id: string): TGroupsAction => ({
  type: EGroupsActions.GROUP_DELETE,
  payload: {
    id,
  },
});

export const changeGroupViewTypeAction = (id: string, view: EViewType): TGroupsAction => ({
  type: EGroupsActions.GROUP_CHANGE_VIEW_TYPE,
  payload: {
    id,
    view,
  },
});

export const changeGroupVisibility = (id: string, visible: boolean): TGroupsAction => ({
  type: EGroupsActions.GROUP_CHANGE_VISIBILITY,
  payload: {
    id,
    visible,
  },
});

export const changeGroupName = (id: string, name: string): TGroupsAction => ({
  type: EGroupsActions.GROUP_CHANGE_NAME,
  payload: {
    id,
    name,
  },
});
