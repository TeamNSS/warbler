var config = require('./config');
var orch = require('orchestrate');
var db = orch(config.dbkey);

db.list('things').then(function(result) {
	console.log(result.body.results)
})

console.log('hello, I am running')

// db.post('things', {
//   "name": "Steve Kaliski",
//   "hometown": "New York, NY",
//   "twitter": "@stevekaliski"
// })
// .then(function (result) {
// console.log(result.path.key)
// })


// db.put('things', 'key', {
//   "name": "Jake",
//   "hometown": "Boston",
//   "twitter": "@Jake"
// })
// .then(function (result) {

// })
// .fail(function (err) {

// })


// db.remove('things', 'key', true)
// .then(function (result) {
// console.log(result.body.results)

// })
// .fail(function (err) {

// })

db.get("things", "baratheon-robert", "20c14e8965d6cbb0")
.then(function (result) {
	console.log(result.path.key)
})
.fail(function (err) {

})