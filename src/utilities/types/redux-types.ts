import { ThunkAction } from 'redux-thunk';
import { TUserData } from './moodboard-types';

export type TAction<E = string> = {
  type: E;
  payload: any;
};

export type TThunk<ReturnType = void, ActionType extends TAction = TAction> = ThunkAction<
ReturnType,
TUserData,
unknown,
ActionType
>;
