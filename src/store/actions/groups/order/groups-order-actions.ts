import { TOrder } from 'utilities/types/moodboard-types';
import { TAction } from 'utilities/types/redux-types';

export enum EGroupsOrderActions {
  ORDER_SET = 'ORDER_SET',
  ORDER_ADD = 'ORDER_ADD',
}

export const setGroupsOrderAction = (orders: TOrder): TAction<EGroupsOrderActions> => ({
  type: EGroupsOrderActions.ORDER_SET,
  payload: orders,
});

export const addGroupToOrderAction = (id: string): TAction<EGroupsOrderActions> => ({
  type: EGroupsOrderActions.ORDER_ADD,
  payload: id,
});
