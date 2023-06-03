migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8bb6sh5ejxnkcq7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ymreloel",
    "name": "owner",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8bb6sh5ejxnkcq7")

  // remove
  collection.schema.removeField("ymreloel")

  return dao.saveCollection(collection)
})
