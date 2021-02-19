import { EGroupsOrderActions } from '../actions/groups-order-actions';
import { TGroupsOrder } from '../../utilities/types/moodboard-types';
import { TAction } from '../../utilities/types/redux-types';

const ordersReducers = (state: TGroupsOrder = [], action: TAction<EGroupsOrderActions>) => {
  switch (action.type) {
    case EGroupsOrderActions.ORDER_SET:
      return [...action.payload];
    case EGroupsOrderActions.ADD_ORDER:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default ordersReducers;
