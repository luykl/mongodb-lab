// 1
db.people.find()
// 2
db.people.count()
// 3
db.people.find({state: "Arizona"})
// 4
db.people.find({state: "Arizona", gender: "Male"})
// 5
db.people.find({ $or: [
    { state: "Arizona" },
    { state : "New Mexico"}
   ]})
// 6
db.people.find({age: {$lt: 40}})
// 7
db.people.find({ $and: [
    { state: "Florida" },
    { gender: "Female" },
    { age : {$gte: 40}},
    { age : {$lte: 45}}
   ]})
// 8
db.people.find({first_name: /^H/})
// 9
db.people.find({state: "Michigan"}).sort({name: 1})
// 10
db.people.find({ $or: [
    {first_name: "Virginia"},
    {state: "Virginia"}
    ]})
// 11
db.people.find({age: {$lt: 30}}, {first_name:true, last_name:true})
// 12
db.people.find({state: "Montana"}, {age: false})
// 13
db.people.find({email: /.edu$/}, {email:true})







