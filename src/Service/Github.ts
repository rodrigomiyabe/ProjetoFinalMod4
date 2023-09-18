import { Api } from './BaseApi'

export async function getUser(userName: string) {
  try {
    const response = await Api.get(`/${userName}`)

    return response.data
  } catch (err) {
    throw new Error(err as string)
  }
}

export async function getRepositories(userName: string) {
  try {
    const response = await Api.get(`/${userName}/repos`)

    return response.data
  } catch (err) {
    throw new Error(err as string)
  }
}
