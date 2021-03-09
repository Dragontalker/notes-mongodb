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
db.students.update({name: "Steve"}, {$push: {"hobbies":"Extreme Basketweaving"}})

# Output:
# WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

---

#### Task 2. While practicing for your Extreme Basketweaving Competition, you broke the computer of the person next to you. They're using a new Operating System now. Change their os field.

💡 __Syntax:__ `db.students.update({name: [name of neighbor]}, {$set: {os:[name of another os]}})`

```bash
db.students.update({name: 'Richard'}, {$set: {os: 'Red Hat Linux'}});

# Output
# WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
```

---

#### Task 3. Another student in your row saw you break that computer and wisely decided to move. Remove them from your database.

---

#### Task 4. You are worried everyone else will leave and you'll have to sit all alone. You decide to bribe everyone who didn't leave with candy. Add a field of `gavecandy` with a value of false to everyone in the array so you can keep track.

---

#### Task 5. All this work made you hungry, so you bought yourself some candy. Change the value of `gavecandy` to `true` in your entry.

---

#### Bonus Task 1. Insert five more documents with one command.

---

#### Bonus Task 2. Return all documents of students who have reading as a hobby or a mac operating system.

