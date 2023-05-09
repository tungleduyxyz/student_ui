migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("que41sd10vkbwq6")

  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("que41sd10vkbwq6")

  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
