import Request from '@/utils/request'

export function SignIn(params) {
  console.log('params', params)
  return Request({
    url: 'https://sandbox-api.facilitapay.com/api/v1/sign_in',
    method: 'post',
    data: params
  })
}
