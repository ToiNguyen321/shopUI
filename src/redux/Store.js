import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { cartReducer, productsReducer } from './Reducers';
import {combineReducers} from 'redux';

const reducers = combineReducers({
   carts: cartReducer,
   products: productsReducer
});

const store = createStore(
    reducers,
    applyMiddleware(thunk),
);

export default store;