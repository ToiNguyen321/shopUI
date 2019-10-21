import * as types from './Types';
import { fetchDataGet } from '../common/Api';
import { CMD } from '../config';
export const actionAddCart = (params) => ({
   type: types.ADD_PRODUCT_TO_CART,
   params
})
export const actionMinusCart = (params) => ({
   type: types.MINUS_PRODUCT_TO_CART,
   params
})
export const actionRemoveCart = (params = '') => ({
   type: types.REMOVE_PRODUCT_TO_CART,
   params: {
      id: params!=='' ? params.id : 'all'
   }
})

export const actionChangeShowPopup = (params = '') => ({
   type: types.REMOVE_PRODUCT_TO_CART,
   params: {
      id: params!=='' ? params.id : 'all'
   }
})

const getData = () => ({
   type: types.FETCH_DATA_PRODUCTS
})
const getDataSuccess = (data) => ({
   type: types.FETCH_DATA_PRODUCTS_SUCCESS,
   data
})
const getDataFail = () => ({
   type: types.FETCH_DATA_PRODUCTS_FAIL,
})
export const actionFetchDataProducts = () => {
   let data = {
      cmd: CMD.GET_LIST_PRODUCT, 
      page: 1
   }
   let url = `Api?data=${JSON.stringify(data)}`;
   return (dispatch)  => {
      dispatch(getData())
      fetchDataGet(url)
         .then(res=>res.json())
         .then(resJ => {
            dispatch(getDataSuccess(resJ))
         })
         .catch(ex => {
            console.error(ex);
            dispatch(getDataFail())
         })

   }
}