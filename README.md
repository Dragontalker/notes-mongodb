### MongoDB Cheat Sheet

###### 1. Start up a new database by switching to it.

💡 __Syntax:__ `use db_name` 

```bash
use lessondb;
```

---

###### 2. Show the current db by running db:

💡 __Syntax:__ `db_name`

```bash
db;
```

---

###### 3. Insert data into the lessondb database with this command.

💡 __Syntax:__ `db.[COLLECTION_NAME].insert({KEY: VALUE})`

* NOTE: This will create the collection automatically.

* ALSO, TAKE NOTE: the contents of the insert are basically a JS object, and include an array:

```bash
db.places.insert({"continent": "Africa", "country":"Morocco", "majorcities": ["Casablanca", "Fez", "Marrakech"]});
```

---

###### 4. Find all data in a Collection.

💡 __Syntax:__ `db.[COLLECTION_NAME].find()`

* NOTE: the MongoDB _id was created automatically.

* This id is specific for each doc in the collection:

```bash
db.places.find();
```

---

###### 5. Adding .pretty() makes the data more readable:

💡 __Syntax:__ `db.[COLLECTION_NAME].find().pretty()`

```bash
db.places.find().pretty();
```

---

###### 6. Find specific data by matching a field:

💡 __Syntax:__ `db.[COLLECTION_NAME].find({KEY: VALUE})`

```bash
db.places.find({"continent": "Africa"});
db.places.find({"country": "Morocco"});
```

---

###### 7. Find specific data by matching an _id:

💡 __Syntax:__ `db.places.find({_id:[ID FROM PREVIOUS RESULT]})`

```bash
db.places.find({_id: ObjectId("5416fe1d94bcf86cd785439036")});
```

---

###### 8. Updating using `$set`.

💡 __Syntax:__ `db.[COLLECTION_NAME].update({KEY: VALUE}, {$set: {KEY: NEW_VALUE}})`

* Note that the above will only update the first entry it matches.

```bash
db.places.update({"country": "Morocco"}, {$set: {"continent": "Antarctica"}});
```

---

###### 9. Updating more than one entries.

💡 __Syntax:__ `db.[COLLECTION_NAME].update({KEY: VALUE}, {$set: {KEY: NEW_VALUE}}, {multi: true})`

```bash
db.places.update({"country": "Morocco"}, {$set: {"continent": "Antarctica"}}, {multi: true})
```

---

###### 10. Adding new KEY pairs using `$set`.

* Recall from the earlier demo the structure of our document:

```bash
db.places.insert({"continent": "Africa", "country": "Morocco", "majorcities": ["Casablanca", "Fez", "Marrakech"]});
```

* What do you think will happen when you run the following command, even though there is not a `capital` field in the document?

```bash
db.places.update({"country": "Morocco"}, {$set: {"capital": "Rabat"}});
```

* `$set` will create the field `capital`.

* The newly created field can now be updated with the same command:

```bash
db.places.update({"country": "Morocco"}, {$set: {"capital": "RABAT"}});
```

----

###### 11. Deleting.

💡 __Syntax:__ `db.[COLLECTION_NAME].remove({KEY: VALUE})`

```bash
db.places.remove({"country": "Morocco"});
```

---

###### 12. Emptying the entire collecton.

💡 __Syntax:__ `db.[COLLECTION_NAME].remove()`


```bash
db.places.remove({});
```

---

###### 13. Deleting the entire collection.

💡 __Syntax:__ `db.[COLLECTION_NAME].drop()`

```bash
db.places.drop();
```

---

###### 14. Deleting the entire database.

💡 __Syntax:__ `db.dropDatabase()`

```bash
db.dropDatabase();
```