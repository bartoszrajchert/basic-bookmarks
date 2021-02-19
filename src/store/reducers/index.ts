import { combineReducers } from 'redux';
import groupsReducers from './groups-reducers';
import ordersReducers from './groups-order-reducers';

const reducers = combineReducers({
  groups: groupsReducers,
  order: ordersReducers,
});

export default reducers;
