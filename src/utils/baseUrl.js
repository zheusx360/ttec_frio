import axios from 'axios'

const api = axios.create({
  baseURL: "https://api-control-base.herokuapp.com/user-system"
})

export default api
