migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("que41sd10vkbwq6")

  collection.listRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("que41sd10vkbwq6")

  collection.listRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
