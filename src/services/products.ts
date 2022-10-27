import instance from "./instance"

const axios = instance() as any

export default class Products {
  static async GeAll<T extends object>(
    url: string,
    params?: { [key: string]: string }
  ): Promise<T> {
    return axios({
      url: url,
      method: "GET",
      params: params
    })
  }
}
