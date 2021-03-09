# Exercise: Creating, Inserting and Finding in MongoDB

---

## __Task 1:__ Use the command line to create a classroom database. 

### __Answer:__
```bash
use classroom
```

---

## __Task 2:__ Insert entries for yourself and the people in your row in a `students` collection.

* Each document should have:

  * A field of `name` with the person's name.

  * A field of `rownumber` which will contain the row number that they are in.

  * A field of `os` which will contain the Operating System of the computer they are using: 'Mac', 'Win', etc

  * A field of `hobbies` with an array of the hobbies the person likes to do.

### __Answer:__
```bash
db.students.insert({
  name: 'Richard', 
  row:1, 
  os:'Windows', 
  hobbies:['Video Gaming', 'Hiking', 'Reading'] 
});

db.students.insert({
  name: 'Linus', 
  row:2, 
  os:'Ubuntu', 
  hobbies:['Coding', 'Reading', 'Running'] 
});

db.students.insert({
  name: 'Steve', 
  row:1, 
  os:'Mac', 
  hobbies:['Designing', 'Reading', 'Swimming'] 
});
```

---


* Use find commands to get:

  * A list of everyone in your row.

  * An entry for a single person.

  * The entries for all the Mac users in your row.

## 💡 Hint(s)

* Use the [Mongo guides](https://docs.mongodb.com/guides/) if you are stuck.

## 🏆 Bonus 

* If you finish early, check out the MongoDB documentation and figure out how to find users by an entry in an array.
