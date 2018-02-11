export default storage => {
  const newStorage = {}

  for (let fav of Object.keys(storage)) {
    newStorage[fav] = fav
  }

  return newStorage
}
