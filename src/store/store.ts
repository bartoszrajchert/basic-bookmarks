import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from 'store/reducers';

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
