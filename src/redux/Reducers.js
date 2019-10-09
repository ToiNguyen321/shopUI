import * as types from './Types';
import { dataCarts } from '../common/dataProduct';

stateCart = dataCarts;
export const cartReducer = (state = stateCart, action) => {
   let {type ,params} = action;
   switch (type) {
      case types.ADD_PRODUCT_TO_CART:
         let product = { id: params.id, amount: params.amount, color: params.color };
         if (state.length === 0) {
            state.push(product);
         }
         else if (state.length > 0) {
            let isProduct = false;
            state.forEach(item => {
               if (item.id === params.id) {
                  item.amount++;
                  isProduct = true;
               }
            });
            
            if (isProduct === false) {
               state.push(product);
            }
         }
         return state;

      case types.REMOVE_PRODUCT_TO_CART:
         state.map(item => {
            if (item.id === params.id) {
               item.amount--;
            }
         });
         state = state.filter(item => item.amount > 0);
         return state;
      default:
         return state;
   }
}