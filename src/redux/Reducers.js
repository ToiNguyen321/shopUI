import * as types from './Types';
import { dataCarts } from '../common/dataProduct';

stateCart = dataCarts;
export const cartReducer = (state = stateCart, action) => {
   let {type ,params} = action;
   console.log(type)
   switch (type) {
      case types.ADD_PRODUCT_TO_CART:
         let product = { id: params.id, amount: params.amount, color: params.color };
         let isProduct = false;
         state.map(item => {
            if (item.id === params.id) {
               item.amount++;
               isProduct = true;
            }
         });
         
         if (isProduct === false) {
            state.push(product);
         }
         
         return [...state];
      case types.REMOVE_PRODUCT_TO_CART:
         state.map(item => {
            if (item.id === params.id) {
               item.amount--;
            }
         });
         // state = state.filter(item => item.amount > 0);
         console.log(state)
         return [...state];
      case types.REMOVE_ALL_PRODUCT_TO_CART:
         state = [];
         return state;
      default:
         return state;
   }
}