import getAxiosInstance from '@/utils/getAxiosInstance'

export async function getUsers() {
  const api = getAxiosInstance()

  let response = null
  try {
    response = await api.get('/users')
  } catch (error) {
    response = null
  }

  return response !== null ? response.data : null
}
