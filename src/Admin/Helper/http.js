import {default as axios} from 'axios'

const {REACT_APP_BACKEND_URL} = process.env

const http = (tokenAdmin=false)=>{
  return axios.create({
    baseURL: REACT_APP_BACKEND_URL,
    headers: {
      'Authorization': tokenAdmin?`Bearer ${tokenAdmin}`:undefined,
      // 'content-type': 'multipart/form-data'
    }
  })
}

export default http