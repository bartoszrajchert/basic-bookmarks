import { TBookmarksGroups, TGroupFirebaseData } from '../../utilities/types/moodboard-types';
import EViewType from '../../utilities/enums/collection';
import { TAction } from '../../utilities/types/redux-types';

export enum EGroupsActions {
  GROUP_SET = 'GROUP_SET',
  GROUP_ADD = 'GROUP_ADD',
  GROUP_DELETE = 'GROUP_DELETE',
  GROUP_CHANGE_VIEW_TYPE = 'GROUP_CHANGE_VIEW_TYPE',
  GROUP_CHANGE_VISIBILITY = 'GROUP_CHANGE_VISIBILITY',
  GROUP_CHANGE_NAME = 'GROUP_CHANGE_NAME',
}

export const groupsFetchedAction = (groups: TBookmarksGroups): TAction<EGroupsActions> => ({
  type: EGroupsActions.GROUP_SET,
  payload: groups,
});

export const addGroupAction = (newGroup: TGroupFirebaseData): TAction<EGroupsActions> => ({
  type: EGroupsActions.GROUP_ADD,
  payload: {
    newGroup,
  },
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
