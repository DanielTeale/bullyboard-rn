import {createStore, compose, applyMiddleware} from 'redux'
import indexReducer from './reducers/indexReducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function store(initialState = {}) {
  return createStore(
    indexReducer,
    composeEnhancers(applyMiddleware(thunk))
  )
};