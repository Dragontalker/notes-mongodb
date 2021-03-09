# Exercise: Creating, Inserting and Finding in MongoDB

## 💡 Hint(s)

* Use the [Mongo guides](https://docs.mongodb.com/guides/) if you are stuck.

---

## __Task 1:__ Use the command line to create a classroom database. 

### 🏆 __Answer:__
```bash
use classroom;
```

---

## __Task 2:__ Insert entries for yourself and the people in your row in a `students` collection.

* Each document should have:

  * A field of `name` with the person's name.

  * A field of `rowNumber` which will contain the row number that they are in.

  * A field of `os` which will contain the Operating System of the computer they are using: 'Mac', 'Win', etc

  * A field of `hobbies` with an array of the hobbies the person likes to do.

### 🏆 __Answer:__
```bash
db.students.insert({
  name: 'Richard', 
  rowNumber: 1, 
  os:'Windows', 
  hobbies:['Video Gaming', 'Hiking', 'Reading'] 
});

db.students.insert({
  name: 'Linus', 
  rowNumber: 2, 
  os:'Ubuntu', 
  hobbies:['Coding', 'Reading', 'Running'] 
});

db.students.insert({
  name: 'Steve', 
  rowNumber: 1, 
  os:'Mac', 
  hobbies:['Designing', 'Reading', 'Swimming'] 
});
```

---

## __Task 3:__  Find a list of everyone in your row.

### 🏆 __Answer:__
```bash
db.students.find({rowNumber: 1});
```

---

## __Task 4:__ Find an entry for myself.

### 🏆 __Answer:__
```bash
db.students.find({name: 'Richard'});
```

---

## __Task 5:__ Find the entries for all the Mac users in your row.

### 🏆 __Answer:__
```bash
db.students.find({rowNumber: 1, os: 'Mac'});
```

---

## __Bonus Task:__ Find users by an entry in an array. 

### 🏆 __Answer:__
```bash
db.students.find({'hobbies': {$in: ['Coding']}});
```
