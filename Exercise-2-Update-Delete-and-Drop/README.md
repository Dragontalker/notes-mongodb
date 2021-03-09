# Exercise 2: Update, Delete and Drop in MongoDB


## 💡 Hint(s)

* Use the [Mongo guides](https://docs.mongodb.com/guides/) if you are stuck.

---

#### Task 0. Go back to your classroom database.

🏆 __Answer:__ Type `mongo` in command-line to initialize MongoDB

```bash
use classroom;
```
---

#### Task 1. You've decided to take on a new hobby. Add Extreme Basketweaving to your array of hobbies.

🏆 __Answer:__

```bash
db.students.update({name: "Steve"}, {$push: {"hobbies":"Extreme Basketweaving"}});

# Output:
# WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

---

#### Task 2. While practicing for your Extreme Basketweaving Competition, you broke the computer of the person next to you. They're using a new Operating System now. Change their os field.

💡 __Syntax:__ `db.students.update({name: [name of neighbor]}, {$set: {os:[name of another os]}})`

🏆 __Answer:__

```bash
db.students.update({name: 'Richard'}, {$set: {os: 'Red Hat Linux'}});

# Output:
# WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

---

#### Task 3. Another student in your row saw you break that computer and wisely decided to move. Remove them from your database.

💡 __Syntax:__ `db.students.remove({name: [name of another neighbor]})`

🏆 __Answer:__

```bash
db.students.remove({name: 'Linus'});

# Output:
# WriteResult({ "nRemoved" : 1 })
```

---

#### Task 4. You are worried everyone else will leave and you'll have to sit all alone. You decide to bribe everyone who didn't leave with candy. Add a field of `gavecandy` with a value of false to everyone in the array so you can keep track.

🏆 __Answer:__

```bash
db.students.update({}, {$set: {gavecandy:false}}, {multi:true});

# Output:
# WriteResult({ "nMatched" : 2, "nUpserted" : 0, "nModified" : 2 })
```

---

#### Task 5. All this work made you hungry, so you bought yourself some candy. Change the value of `gavecandy` to `true` in your entry.

🏆 __Answer:__

```bash
db.students.update({name:'Steve'}, {$set: {gavecandy:true}});

# Output:
# WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

---

#### Bonus Task 1. Insert five more documents with one command.

💡 __Syntax:__ `db.students.insertMany([{DOCUMENT1}, {DOCUMENT2}, ...])

🏆 __Answer:__

```bash
db.students.insertMany([
  {name: 'Jane', row:1, os:'Mac', hobbies:['Coding', 'Sleeping', 'Karate'] },
  {name: 'Mary', row:2, os:'Mac', hobbies:['Baseball', 'Basketball', 'Tai Chi'] },
  {name: 'Alexa', row:3, os:'Lin', hobbies:['Gaming', 'Reading', 'Gardening'] },
  {name: 'Gary', row:4, os:'Mac', hobbies:['Walking', 'Reading', 'Mountain Climbing'] },
  {name: 'Ed', row:5, os:'Win', hobbies:['Coding', 'Karate', 'Scuba Diving'] }
]);

# Outputs:
# {
#         "acknowledged" : true,
#         "insertedIds" : [
#                 ObjectId("6047bba838586d29b401ef0a"),
#                 ObjectId("6047bba838586d29b401ef0b"),
#                 ObjectId("6047bba838586d29b401ef0c"),
#                 ObjectId("6047bba838586d29b401ef0d"),
#                 ObjectId("6047bba838586d29b401ef0e")
#         ]
# }
```
---

#### Bonus Task 2. Return all documents of students who have reading as a hobby or a mac operating system.

