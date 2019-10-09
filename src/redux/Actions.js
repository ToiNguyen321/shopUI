import * as types from './Types';
//params = {id, amount, color} 
export const actionAddCart = (params) => ({
   type: types.ADD_PRODUCT_TO_CART,
   params
})
export const actionRemoveCart = (params) => ({
   type: types.REMOVE_PRODUCT_TO_CART,
   params
})