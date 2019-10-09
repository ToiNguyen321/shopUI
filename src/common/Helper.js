export const isObjEmpty = (obj = Object) => {
   if(Object.entries(obj).length === 0 && obj.constructor === Object)
      return true;
   return false
}