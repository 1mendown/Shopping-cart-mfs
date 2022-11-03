const RemoveDuplicate = <T extends object>(arr: []) => {
  const uniqueIds = new Set()

  const unique = arr?.filter((element: T & { id: string & number }) => {
    const isDuplicate = uniqueIds.has(element.id)

    uniqueIds.add(element.id)

    if (!isDuplicate) {
      return true
    }

    return false
  })

  return unique
}

export default RemoveDuplicate
