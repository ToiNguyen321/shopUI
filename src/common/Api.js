import { API } from "../config"


export const fetchPost = async (URL = '', data, call_back) => {
   console.log(API + URL)
   fetch(`${API + URL}`, {
      method: 'POST',
      headers: {
         Accept: 'application/json',
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
   })
   .then(res => res.json())
   .then(resJson => call_back(resJson))
   .catch(ex => console.error(ex))
}

export const fetchDataGet = async (URL) => {
   return await fetch(`${API + URL}`);
}