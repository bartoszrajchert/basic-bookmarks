import { arrayMove } from '@dnd-kit/sortable';
import { IBookmarksGroupsDoc } from '../../utilities/types/moodboard-types';
import { Action, EGroupsActions } from '../actions';

const groups = (state: IBookmarksGroupsDoc[] = [], action: Action) => {
  // eslint-disable-next-line no-console
  console.log('[REDUCES - Groups]', action);

  // TODO: refactor last 3 functions
  switch (action.type) {
    case EGroupsActions.GROUP_FETCH_SUCCESS:
      return [...action.payload];
    case EGroupsActions.SWAP_GROUPS:
      return arrayMove([...state], action.payload.oldIndex, action.payload.newIndex);
    case EGroupsActions.ADD_GROUP:
      return [action.payload.newGroup, ...state];
    case EGroupsActions.UPDATE_GROUPS:
      return [...action.payload.newGroups];
    case EGroupsActions.DELETE_GROUP:
      return [...state].filter((group) => group.id !== action.payload.id);
    case EGroupsActions.CHANGE_GROUP_VIEW_TYPE: {
      const index: number = state.findIndex((group) => group.id === action.payload.id);
      const newState = [...state];
      newState[index].view = action.payload.view;

      return newState;
    }
    case EGroupsActions.CHANGE_GROUP_VISIBILITY: {
      const index: number = state.findIndex((group) => group.id === action.payload.id);
      const newState = [...state];
      newState[index].visible = action.payload.visible;

      return newState;
    }
    case EGroupsActions.CHANGE_GROUP_NAME: {
      const index: number = state.findIndex((group) => group.id === action.payload.id);
      const newState = [...state];
      newState[index].name = action.payload.name;

      return newState;
    }
    default:
      return state;
  }
};

export default groups;
