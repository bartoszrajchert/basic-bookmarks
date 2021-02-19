import { TGroupsOrder } from '../../utilities/types/moodboard-types';
import { TAction } from '../../utilities/types/redux-types';

export enum EGroupsOrderActions {
  ORDER_SET = 'ORDER_SET',
  ADD_ORDER = 'ADD_ORDER',
}

export const setGroupsOrderAction = (orders: TGroupsOrder): TAction<EGroupsOrderActions> => ({
  type: EGroupsOrderActions.ORDER_SET,
  payload: orders,
});

export const addGroupToOrderAction = (id: string): TAction<EGroupsOrderActions> => ({
  type: EGroupsOrderActions.ADD_ORDER,
  payload: id,
});
