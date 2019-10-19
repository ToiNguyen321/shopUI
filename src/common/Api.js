const API = 'http://192.168.1.111/ShopAny/api/';

export const fetchPost = async (URL = '', data, call_back) => {
   console.log(API + URL)
   await fetch(API + URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
   })
   .then(res => res.json())
   .then(resJson => call_back(resJson))
   .catch(ex => console.log(ex))
}