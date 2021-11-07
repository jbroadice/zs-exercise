import getAxiosInstance from '@/utils/getAxiosInstance'
import { getUsers } from '@/data/users'

export async function getFiles() {
  const api = getAxiosInstance()

  let response = null
  try {
    response = await api.get('/files')
  } catch (error) {
    response = null
  }

  if (response === null) {
    return null
  }

  const types = await getFileTypes()
  const users = await getUsers()

  if (types === null || users === null) {
    return null
  }

  // Iteratively append type and user object to each file
  return response.data.map((file) => {
    const type = types.find((type) => type.id === file.type)
    const createdBy = users.find((user) => user.id === file.createdBy)
    const modifiedBy = users.find((user) => user.id === file.modifiedBy)

    return {...file, type, createdBy, modifiedBy}
  })
}

export async function getFileTypes() {
  const api = getAxiosInstance()

  let response = null
  try {
    response = await api.get('/types')
  } catch (error) {
    response = null
  }

  return response !== null ? response.data : null
}
