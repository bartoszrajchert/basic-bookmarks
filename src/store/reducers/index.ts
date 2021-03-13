import { combineReducers } from 'redux';
import groupsReducers from 'store/reducers/groups-reducers';
import ordersReducers from 'store/reducers/groups-order-reducers';

const reducers = combineReducers({
  groups: groupsReducers,
  order: ordersReducers,
});

export default reducers;
