migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8bb6sh5ejxnkcq7")

  // remove
  collection.schema.removeField("eupnmcjp")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8bb6sh5ejxnkcq7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eupnmcjp",
    "name": "trip",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "g4yhsqnbjlgf3tp",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
