import { TGroupsOrder } from '../../utilities/types/moodboard-types';

export enum EGroupsOrderActions {
  ORDER_SET = 'ORDER_SET',
}

export type TGroupsOrderAction = {
  type: EGroupsOrderActions;
  payload: any;
};

export const setGroupsOrderAction = (orders: TGroupsOrder): TGroupsOrderAction => ({
  type: EGroupsOrderActions.ORDER_SET,
  payload: orders,
});
