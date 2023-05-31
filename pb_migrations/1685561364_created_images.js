migrate((db) => {
  const collection = new Collection({
    "id": "8bb6sh5ejxnkcq7",
    "created": "2023-05-31 19:29:24.860Z",
    "updated": "2023-05-31 19:29:24.860Z",
    "name": "images",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "2ed3mbp1",
        "name": "coords",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8bb6sh5ejxnkcq7");

  return dao.deleteCollection(collection);
})
