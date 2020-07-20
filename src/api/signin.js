import Request from '@/utils/request'

export function SignIn(params) {
  return Request({
    url: 'sign_in',
    method: 'post',
    data: params
  })
}
