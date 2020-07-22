import Request from '@/utils/request'

export function SignIn(params) {
  console.log('params', params)
  return Request({
    url: 'sign_in',
    method: 'post',
    data: params
  })
}
