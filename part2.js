// 1
db.people.insertOne({
    first_name: "Clayton", 
    last_name: "Burmeister", 
    email: "clay@clay.edu",
    gender: "Male",
    age: 4,
    state: "Wisconsin",
    children: []
    })
// 2
db.people.insertOne({
    first_name: "Nathan", 
    last_name: "Bickel", 
    email: "nate@nate.edu",
    gender: "Male",
    age: 63,
    state: "Wisconsin",
    children: [{name: "Abby", age: 34}, {name: "Beka", age: 31}]
    })
// 3
db.people.updateOne({first_name: "Clarence", state: "North Dakota"},
{ $set: {state: "South Dakota"} })
// 4
db.people.updateOne({first_name: "Rebecca", last_name: "Hayes"},
{ $unset: {email: ""} })
// 5
db.people.updateMany({state: "Missouri"}, 
 { $inc: {age: 1} })
// 6
db.people.replaceOne({first_name: "Jerry", last_name: "Baker"},
   { first_name: "Jerry", 
   last_name: "Baker-Mendez", 
   email: "jerry@classic.ly", 
   gender:"Male", 
   age: 28, 
   state: "Vermont", 
   children: [{name: "Alan", age: 18}, {name: "Jenny", age: 3}] }
   )
// 7
db.people.deleteOne({first_name: "Wanda", last_name: "Bowman"})
// 8
db.people.deleteMany({email: null})
// 9
db.submissions.insertMany([
    {title: "The River Bend", upvotes: 10, downvotes: 2, artist: ObjectId("60ae7fc1ed56c0080c9ac1e5")},
    {title: "Nine Lives", upvotes: 7, downvotes: 0, artist: ObjectId("60ae7fc1ed56c0080c9ac213")},
    {title: "Star Bright", upvotes: 19, downvotes: 3, artist: ObjectId("60ae7fc1ed56c0080c9ac296")},
    {title: "Why Like This?", upvotes: 1, downvotes: 5, artist: ObjectId("60ae7fc1ed56c0080c9ac21c")},
    {title: "Non Sequitur", upvotes: 11, downvotes: 1, artist: ObjectId("60ae7fc1ed56c0080c9ac1e3")}
])
// 10
db.submissions.updateOne({title: "The River Bend"},
  { $inc: { upvotes:2 }  })
// 11
db.submissions.updateMany({upvotes: {$gte: 10}},
    { $set: {round2: true} })





