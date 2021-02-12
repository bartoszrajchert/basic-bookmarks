import { EGroupsOrderActions, TGroupsOrderAction } from '../actions/groups-order-actions';
import { TGroupsOrder } from '../../utilities/types/moodboard-types';

const ordersReducers = (state: TGroupsOrder = [], action: TGroupsOrderAction) => {
  switch (action.type) {
    case EGroupsOrderActions.ORDER_SET:
      return [...action.payload];
    default:
      return state;
  }
};

export default ordersReducers;
