import { TOrder } from 'utilities/types/moodboard-types';
import { TAction } from 'utilities/types/redux-types';
import { EGroupsOrderActions } from 'store/actions/groups/order/groups-order-actions';

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
