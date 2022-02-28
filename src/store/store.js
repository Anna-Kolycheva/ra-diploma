import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cartReducer from '../reducers/cart';
import catalogReducer from '../reducers/catalog';
import hitsReducer from '../reducers/hits';

const reducer = combineReducers({
   hits: hitsReducer,
   catalog: catalogReducer,
   cart: cartReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
