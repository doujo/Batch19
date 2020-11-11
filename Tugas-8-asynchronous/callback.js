const readBooks = (time, book, callback) => {
	if(book){
		console.log(`saya membaca ${book.name}`)
		setTimeout(function(){
			var sisaWaktu = 0
			if(time > book.timeSpent){
				sisaWaktu = time - book.timeSpent
				console.log(`saya sudah membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
				callback(sisaWaktu)
			}else{
				console.log('waktu saya abis')
				callback(time)
			}
		}, book.timeSpent)
	}
}

module.exports = readBooks
