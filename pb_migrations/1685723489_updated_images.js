migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8bb6sh5ejxnkcq7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "to6kn6tq",
    "name": "image",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 10485760,
      "mimeTypes": [
        "image/png",
        "image/jpeg",
        "image/gif",
        "image/webp",
        "image/tiff",
        "image/bmp",
        "image/heic",
        "image/avif"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8bb6sh5ejxnkcq7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "to6kn6tq",
    "name": "image",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/jpeg",
        "image/gif",
        "image/webp",
        "image/tiff",
        "image/bmp",
        "image/heic",
        "image/avif"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
