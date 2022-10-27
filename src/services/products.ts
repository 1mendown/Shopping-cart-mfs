import instance from "./instance"

const axios = instance() as any

// interface getTableDataType {
//   url: string
//   params: { [key: string]: string }
//   cancelToken: { token: {} }
// }

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
