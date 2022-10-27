import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from "axios"

const baseUrl: string = "https://fakestoreapi.com/"

const instance = (url: string | number = "") => {
  const Axios: AxiosInstance = axios.create({
    headers: {
      "X-Powered-By": "Express",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json; charset=utf-8",
      ETag: `W / "e4-sNacOQVPDWYXECdrnvUU63hqtSM`
    }
  })

  try {
    Axios.interceptors.request.use(
      async function (request: AxiosRequestConfig) {
        request.baseURL = `${baseUrl}${url}`

        return request
      },
      function (error: AxiosError) {
        return error
      }
    )

    Axios.interceptors.response.use(
      async function (response: AxiosResponse) {
        const data = await response?.data

        return data
      },
      function (error: AxiosError) {
        return Promise.reject(error)
      }
    )
  } catch (error) {
    return error
  }

  return Axios
}

export default instance
