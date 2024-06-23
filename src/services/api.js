import axios from 'axios'

const baseURL = import.meta.env.VITE_BASE_API_URL

export default () => {
  return axios.create({
    baseURL: baseURL
  })
}
