migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g4yhsqnbjlgf3tp")

  collection.listRule = "@request.auth.id = owner.id"
  collection.viewRule = "@request.auth.id = owner.id"
  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = null
  collection.deleteRule = "@request.auth.id = owner.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g4yhsqnbjlgf3tp")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = ""
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
