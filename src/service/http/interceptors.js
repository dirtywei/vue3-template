// import { resolveResError } from './helpers'
// import { lStorage } from '@/utils'

//请求拦截器
export function reqResolve(config) {
  // config.headers = { ...config.headers, Authorization: lStorage.get('token') || '' }
  return config
}

//请求错误拦截器
export function reqReject(error) {
  console.error('请求异常，请稍后重试' + error)
  return Promise.reject(error)
}
//响应拦截器
export function resResolve(response) {
  return Promise.resolve(response.data)
}

//响应错误拦截器
export function resReject(error) {
  console.error('请求异常，请稍后重试' + error)
  return Promise.reject(error)
}
