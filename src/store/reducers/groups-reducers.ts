import { TGroupsObject } from '../../utilities/types/moodboard-types';
import { EGroupsActions } from '../actions/groups/groups-actions';
import { TAction } from '../../utilities/types/redux-types';

const groupsReducers = (state: TGroupsObject = {}, action: TAction<EGroupsActions>) => {
  const newState = { ...state };

  switch (action.type) {
    case EGroupsActions.GROUP_SET:
      return { ...action.payload };
    case EGroupsActions.GROUP_ADD: {
      newState[action.payload.newGroup.id] = action.payload.newGroup;
      return newState;
    }
    case EGroupsActions.GROUP_DELETE: {
      delete newState[action.payload.id];
      return newState;
    }
    case EGroupsActions.GROUP_CHANGE_VIEW_TYPE: {
      newState[action.payload.id].view = action.payload.view;
      return newState;
    }
    case EGroupsActions.GROUP_CHANGE_VISIBILITY: {
      newState[action.payload.id].visible = action.payload.visible;
      return newState;
    }
    case EGroupsActions.GROUP_CHANGE_NAME: {
      newState[action.payload.id].name = action.payload.name;
      return newState;
    }
    case EGroupsActions.GROUP_CHANGE_BOOKMARKS_ORDER: {
      newState[action.payload.id].bookmarks.order = action.payload.orders;
      return newState;
    }
    default:
      return state;
  }
};

export default groupsReducers;
