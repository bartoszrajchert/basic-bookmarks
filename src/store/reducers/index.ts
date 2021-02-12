import { combineReducers } from 'redux';
import groupsReducers from './groups-reducers';
import ordersReducers from './groups-order-reducers';

const reducers = combineReducers({
  groups: groupsReducers,
  groupsOrder: ordersReducers,
});

export default reducers;
