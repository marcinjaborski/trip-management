migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8bb6sh5ejxnkcq7")

  collection.listRule = "@request.auth.id = owner.id"
  collection.viewRule = "@request.auth.id = owner.id"
  collection.createRule = "@request.auth.id != \"\""
  collection.deleteRule = "@request.auth.id = owner.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8bb6sh5ejxnkcq7")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
