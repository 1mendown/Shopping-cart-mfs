const safeAccess = (nestedObj: any, pathArr: any) => {
  return pathArr.reduce(
    (obj: any, key: string | number) =>
      obj ? (obj && obj[key] !== "undefined" ? (obj[key] ? obj[key] : "") : "") : "",
    nestedObj
  )
}

export default safeAccess
