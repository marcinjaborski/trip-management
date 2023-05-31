migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g4yhsqnbjlgf3tp")

  // remove
  collection.schema.removeField("y3mciql8")

  // add
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

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g4yhsqnbjlgf3tp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y3mciql8",
    "name": "images",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  // remove
  collection.schema.removeField("bt9ksrnt")

  // remove
  collection.schema.removeField("yd8ffkdg")

  return dao.saveCollection(collection)
})
