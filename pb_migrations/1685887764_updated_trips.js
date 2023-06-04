migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g4yhsqnbjlgf3tp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bt9ksrnt",
    "name": "thumbnail",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "8bb6sh5ejxnkcq7",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yd8ffkdg",
    "name": "images",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "8bb6sh5ejxnkcq7",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g4yhsqnbjlgf3tp")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bt9ksrnt",
    "name": "thumbnail",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "8bb6sh5ejxnkcq7",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yd8ffkdg",
    "name": "images",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "8bb6sh5ejxnkcq7",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
