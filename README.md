# MongoDB Cheat Sheet

## 1. Start up a new database by switching to it.

💡 __Syntax:__ `use db_name` 

```bash
use lessondb;
```

---

## 2. Show the current db by running db:

💡 __Syntax:__ `db_name`

```bash
db;
```

---

## 3. Insert data into the lessondb database with this command.

💡 __Syntax:__ `db.[COLLECTION_NAME].insert({KEY: VALUE})`

* NOTE: This will create the collection automatically.

* ALSO, TAKE NOTE: the contents of the insert are basically a JS object, and include an array:

```bash
db.places.insert({"continent": "Africa", "country":"Morocco", "majorcities": ["Casablanca", "Fez", "Marrakech"]});
```

---

## 4. Find all data in a Collection.

💡 __Syntax:__ `db.[COLLECTION_NAME].find()`

* NOTE: the MongoDB _id was created automatically.

* This id is specific for each doc in the collection:

```bash
db.places.find();
```

---

## 5. Adding .pretty() makes the data more readable:

💡 __Syntax:__ `db.[COLLECTION_NAME].find().pretty()`

```bash
db.places.find().pretty();
```

---

## 6. Find specific data by matching a field:

💡 __Syntax:__ `db.[COLLECTION_NAME].find({KEY: VALUE})`

```bash
db.places.find({"continent": "Africa"});
db.places.find({"country": "Morocco"});
```

---

## 7. Find specific data by matching an _id:

💡 __Syntax:__ `db.places.find({_id:[ID FROM PREVIOUS RESULT]})`

```bash
db.places.find({_id: ObjectId("5416fe1d94bcf86cd785439036")});
```

---

## 8. Updating

💡 __Syntax:__ `db.[COLLECTION_NAME].update({KEY: VALUE}, {$set: {KEY: NEW_VALUE}})`

```bash
db.places.update({"country": "Morocco"}, {$set: {"continent": "Antarctica"}});
```

