// Soal No.1 (Array to Object)
const arrayToObject = (arrData) => {
	var personData = []
	// init date
	let dateNow = new Date()
	let thisYear = dateNow.getFullYear()
	// conver array to object
	for(let i = 0; i < arrData.length; i++){
		let tempObject = {}
		// calculate age
		let birthDate = arrData[i][3]
		let personAge = (birthDate < thisYear) ? thisYear - arrData[i][3] : "Invalid birth year"

		// add data to temporary object
		tempObject["firstName"] = arrData[i][0]
		tempObject["lastName"] = arrData[i][1]
		tempObject["gender"] = arrData[i][2]
		tempObject["age"] = personAge
		// add temp object to personData
		personData.push(tempObject)
	}

	personData.forEach((person, index) => {
		console.log(`${index+1}. ${person["firstName"]} ${person["lastName"]} : ${JSON.stringify(person)}`)
	})
}

console.log("Soal No.1 (Array to Object)")
console.log("-------------------------------------")
const data = [ ["Abduh", "Muhammad", "male", 1992], ["Ahmad", "Taufik", "male", 1985] ]
arrayToObject(data)

var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people)

var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2)
console.log("\n\n")

// Soal No.2 (Shopping Time)
const shoppingTime = (memberId = '', money = 0) => {
	let memberData = {
		memberId: memberId,
		money: money,
		listPurchased: [],
		changeMoney: 0
	}

	const shopItems = [
		{category: 'Sepatu', brand: 'Stacattu', price: 1500000},
		{category: 'Baju', brand: 'Zoro', price: 500000},
		{category: 'Baju', brand: 'H&N', price: 250000},
		{category: 'Sweater', brand: 'Uniklooh', price: 175000},
		{category: 'Casing Handphone', brand: '', price: 50000},
	]

	if(memberId === undefined || memberId === ''){
		return "Mohon maaf, toko X hanya berlaku untuk member saja"
	}else if(money === undefined || money === '' || money < 50000){
		return "Mohon maaf, uang tidak cukup"
	}else{
		// atur kembalian berdasarkan uang member
		let tempChangeMoney = memberData.money
		shopItems.forEach((shopItem)=>{
			if(memberData.money >= shopItem.price){
				// tambahkan shop item ke purchased list
				memberData.listPurchased.push(`${shopItem.category} ${shopItem.brand}`)
				tempChangeMoney -= shopItem.price
				// update kembalian
				memberData["changeMoney"] = tempChangeMoney
			}
		})
	}
	return memberData
}

console.log("Soal No.2 (Shopping Time)")
console.log("-------------------------------------")
console.log(shoppingTime('1820RzKrnWn08', 2475000))
console.log(shoppingTime('82Ku8Ma742', 170000))
console.log(shoppingTime('', 2475000))
console.log(shoppingTime('234JdhweRxa53', 15000))
console.log(shoppingTime())
console.log("\n\n")

// Soal No.3 (Naik Angkot)
const naikAngkot = (listPenumpang) => {
	rute = ['A', 'B', 'C', 'D', 'E', 'F']
	if(listPenumpang !== undefined || listPenumpang !== [] || listPenumpang !== ""){
		pembayaranPenumpang = []
		listPenumpang.forEach( (penumpang) => {
			let tempData = {}
			let totalBayar = 0
			tempData.penumpang = penumpang[0]
			tempData.naikDari = penumpang[1]
			tempData.tujuan = penumpang[2]

			let originIndex = rute.indexOf(tempData.naikDari)
			let destinationIndex = rute.indexOf(tempData.tujuan)
			for(let i = originIndex; i < destinationIndex; i++){
				totalBayar += 2000
			}
			tempData.bayar = totalBayar
			pembayaranPenumpang.push(tempData)
		})
	}
	return pembayaranPenumpang
}
console.log("Soal No.3 (Naik Angkot)")
console.log("-------------------------------------")
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]))
console.log(naikAngkot([]));
