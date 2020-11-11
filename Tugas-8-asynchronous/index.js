const readBooks = require('./callback.js')

const books = [
	{name: 'LOTR', timeSpent: 3000},
	{name: 'Fidas', timeSpent: 2000},
	{name: 'Kalkulus', timeSpent: 4000}
]

let i = 0
const reading = (time = 10000, book = books[i]) => {
	readBooks(time, book, function(sisaWaktu){
		if(time > book.timeSpent){
			i++
			reading(sisaWaktu, books[i])
		}else{
			console.log('Membaca teerhenti, waktu tidak cukup')
		}
	})
}
reading()
