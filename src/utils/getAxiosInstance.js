import { setup } from 'axios-cache-adapter'
import axiosRetry from 'axios-retry'

const axios = setup({
  // `axios` options
  baseURL: 'http://localhost:3001',

  // `axios-cache-adapter` options
  cache: {
    // Automatically cache all idempotent requests for 15 minutes
    maxAge: 15 * 60 * 1000,

    // Attempt reading stale cache data when response status is 5xx
    readOnError: (error, request) => {
      return error.response.status >= 500 && error.response.status < 600
    },

    // Deactivate `clearOnStale` option so that we can actually read stale cache data
    clearOnStale: false
  }
})

// Automatically retry failed (status 5xx) idempotent requests
axiosRetry(axios, {
  retries: 3
})

export default function getAxiosInstance() {
  return axios
}
