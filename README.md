# MongoDB Cheat Sheet

## 1. Start up a new database by switching to it.

```bash
use lessondb
```

---

## 2. Show the current db by running db:

```bash
db
```

---

## 3. Insert data into the lessondb database with this command.

* NOTE: This will create the collection automatically.

* ALSO, TAKE NOTE: the contents of the insert are basically a JS object, and include an array:

```bash
db.places.insert({"continent": "Africa", "country":"Morocco", "majorcities": ["Casablanca", "Fez", "Marrakech"]});
```

---

## 4. Find all data in a Collection with `db.[COLLECTION_NAME].find()`.

* NOTE: the MongoDB _id was created automatically.

* This id is specific for each doc in the collection:

```bash
db.places.find();
```

---

## 5. Adding .pretty() makes the data more readable:

```bash
db.places.find().pretty();
```

---

## 6. Find specific data by matching a field:

```bash
db.places.find({"continent": "Africa"}).pretty();
db.places.find({"country": "Morocco"}).pretty();
```

---

## 7. Find specific data by matching an _id:

* Use `db.places.find({_id:[COPY AN OBJECTID FROM THE PREVIOUS FIND RESULTS]})`

```bash
db.places.find({_id: ObjectId("5416fe1d94bcf86cd785439036")});
```

## 8. Updating

* We update data using `db.[COLLECTION_NAME].update()`

```bash
db.places.update({"country": "Morocco"}, {$set: {"continent": "Antarctica"}});
```

