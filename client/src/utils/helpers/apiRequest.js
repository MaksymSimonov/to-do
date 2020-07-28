import axios from 'axios'

const METHOD_GET = 'get'
const METHOD_POST = 'post'
const METHOD_PUT = 'put'
const METHOD_DELETE = 'delete'
const API_BASE_URL = '/api/v1'
const DOMAIN = 'http://localhost:8000'

const handleRequestError = error => {
  if (error.response) {
    const toastrMessage = error.response.data.message
      ? error.response.data.message
      : error.response.data || 'Error occurred during request to server'
    console.log(toastrMessage)
    return error.response
  } else if (error.request) {
    console.log('Application is not responding, check your network connection')
    return error.request
  } else if (error.message) {
    console.log(error.message)
    return error.message
  } else {
    console.log('Error occurred during request to server')
  }
}

class ApiRequest {
  get (url, config) {
    return this.makeRequest(url, METHOD_GET, null, config)
  }

  post (url, body, config) {
    return this.makeRequest(url, METHOD_POST, body, config)
  }

  put (url, body, config) {
    return this.makeRequest(url, METHOD_PUT, body, config)
  }

  delete (url, config) {
    return this.makeRequest(url, METHOD_DELETE, null, config)
  }

  makeRequest (url, method = METHOD_GET, body = null, config) {
    const reqUrl = DOMAIN + API_BASE_URL + url
    const reqParams = {
      ...config,
      method,
      data: body
    }

    if ((method === METHOD_POST || method === METHOD_PUT) &&
      !reqParams.headers) {
      reqParams.headers = {
        'Content-Type': 'application/json'
      }
    }
    return this.sendBasicRequest(reqUrl, reqParams)
  }

  sendBasicRequest (url, reqParams) {
    return axios(url, reqParams)
      .then(res => res.data,
        err => Promise.reject(handleRequestError(err)))
  }
}

export default new ApiRequest()
