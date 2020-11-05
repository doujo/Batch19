// No.1
function teriak(){
	return "Halo Sanbers!"
}
console.log(teriak())

// No.2
function kalikan(angka1, angka2){
	return angka1*angka2
}
let num1 = 12
let num2 = 4
let hasilKali = kalikan(num1, num2)
console.log(hasilKali)

// No.3
function introduce(name, age, address, hobby){
	let teks = `Nama saya ${name}, `
	teks += `umur saya ${age} tahun, `
	teks += `alamat saya di ${address}, `
	teks += `dan saya punya hobby yaitu ${hobby}`
	return teks
}

let name = 'Agus'
let age = 30
let address = 'Jln. Malioboro, Yogyakarta'
let hobby = 'Gaming'

let perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)
