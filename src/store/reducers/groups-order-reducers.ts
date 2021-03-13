import { EGroupsOrderActions } from '../actions/groups/order/groups-order-actions';
import { TOrder } from '../../utilities/types/moodboard-types';
import { TAction } from '../../utilities/types/redux-types';

const ordersReducers = (state: TOrder = [], action: TAction<EGroupsOrderActions>) => {
  switch (action.type) {
    case EGroupsOrderActions.ORDER_SET:
      return [...action.payload];
    case EGroupsOrderActions.ORDER_ADD:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default ordersReducers;
