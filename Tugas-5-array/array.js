// No.1 Range
function range(startNum, finishNum){
	let numbers = []
	if(startNum > 0 && finishNum > 0){
		if(startNum < finishNum){
			for(let i = startNum; i <= finishNum; i++){
				numbers.push(i)
			}
			numbers = numbers.sort((val1, val2) => {return val1 - val2})
		}else{
			for(let i = startNum; i >= finishNum; i--){
				numbers.push(i)
			}
			numbers = numbers.sort((val1, val2) => {return val2 - val1})
		}
	}else{
		numbers.push(-1)
	}
	return numbers
}
console.log('No.1 Range')
console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1
console.log('----------------------------------------------')


function rangeWithStep(startNum, finishNum, step = 1){
	let numbers = []
	if(startNum !== undefined && finishNum !== undefined){
		if(startNum < finishNum){
			for(let i = startNum; i <= finishNum; i += step){
				numbers.push(i)
			}
			numbers = numbers.sort((val1, val2) => {return val1 - val2})
		}else{
			for(let i = startNum; i >= finishNum; i -= step){
				numbers.push(i)
			}
			numbers = numbers.sort((val1, val2) => {return val2 - val1})
		}
	}else if(startNum !== undefined && finishNum === undefined){
		for(let i = 0; i <= startNum; i += step){
			numbers.push(i)
		}
	}
	else{
		numbers.push(0)
	}
	return numbers
}
console.log('No.2 Range with step')
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5]
console.log('----------------------------------------------')

function sum(startNum, finishNum, step){
	let range = rangeWithStep(startNum, finishNum, step)
	let sum = eval(range.join('+'))
	return sum
}

console.log('No.3 Sum of range')
console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0
console.log('----------------------------------------------')

function dataHandling(input){
	let data = input
	let biodata = ''
	for(let i = 0; i < data.length; i++){
		biodata += `Nomor ID : ${data[i][0]} \n`
		biodata += `Nama Lengkap : ${data[i][1]} \n`
		biodata += `TTL : ${data[i][2]} \n`
		biodata += `Hobi : ${data[i][3]} \n`
		biodata += '\n'
	}
	return biodata
}

var input = [
		["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
		["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
		["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
		["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log('No.4 Array multidimensi')
console.log('----------------------------------------------')
console.log(dataHandling(input))
console.log('----------------------------------------------')

function balikKata(kata){
	let kataTerbalik = ''
	for(let i = kata.length - 1; i >= 0; i--){
		kataTerbalik += kata[i]
	}
	return kataTerbalik
}

console.log('No.5 Balik Kata')
console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I
console.log('----------------------------------------------')

console.log('No.6 Metode Array')

function dataHandling2(input){
	input.splice(1, 1, "Roman Alamsyah Elsharawy")
	input.splice(2, 1, "Provinsi Bandar Lampung")
	input.splice(4, 0, "Pria")
	input.splice(5, 1, "SMA Internasional Metro")
	console.log(input)

	birthDate = input[3]
	splitBirthDate = birthDate.split('/')
	switch(parseInt(splitBirthDate[1])){
		case 1: {console.log('Januari'); break;}
		case 2: {console.log('Februari'); break;}
		case 3: {console.log('Maret'); break;}
		case 4: {console.log('April'); break;}
		case 5: {console.log('Mei'); break;}
		case 6: {console.log('Juni'); break;}
		case 7: {console.log('Juli'); break;}
		case 8: {console.log('Agustus'); break;}
		case 9: {console.log('September'); break;}
		case 10: {console.log('Oktober'); break;}
		case 11: {console.log('November'); break;}
		case 12: {console.log('Desember'); break;}
	}
	let sortedBirthDate = birthDate.split('/').sort((val1, val2) => {return val2 - val1})
	console.log(sortedBirthDate)
	console.log(splitBirthDate.join('-'))
	let name = input[1].split('').splice(0,14).join('')
	console.log(name)
}
dataHandling2(["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"])
