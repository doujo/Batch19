var readBooksPromise = require('./promise.js')

var books = [
	{name: 'LOTR', timeSpent: 3000},
	{name: 'Fidas', timeSpent: 2000},
	{name: 'Kalkulus', timeSpent: 4000}
]

var i = 0
function reading(time = 10000, book = books[i]){
	readBooksPromise(time, book)
		.then(function (sisaWaktu){
			if (sisaWaktu >= books[i].timeSpent){
				i++
				reading(sisaWaktu, books[i])
			}else{
				console.log('Membaca terhenti, waktu tidak cukup')
			}
		})
		.catch(function (error){
			console.log(error.message)
		})
}
reading()
