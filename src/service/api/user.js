import { request } from '../http'

//账密登录
export function fetchLogin(data) {
  return request({
    url: '/transpond/sys/login',
    method: 'post',
    data
  })
}
