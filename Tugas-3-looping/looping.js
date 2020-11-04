// 1. Looping menggunakan while
console.log('1. Looping while pertama')
var i = 0
while(i < 20){
	i += 2
	console.log(`${i} - I love coding`)
}
console.log('--------------------------------')
console.log('1. Looping while kedua')
var i = 20
while(i > 0){
	console.log(`${i} - I love coding`)
	i -= 2
}
console.log('--------------------------------')

// 2. Looping menggunakan for
console.log('No.2 Looping menggunakan for')

for(let i = 1; i <= 20; i++){
	if(i%2 === 0){
		console.log(`${i} - Berkualitas`)
	}else if(i%3 === 0){
		console.log(`${i} - I Love Coding`)
	}else{
		console.log(`${i} - Santai`)
	}
}
console.log('--------------------------------')

console.log('No.3 Membuat persegi panjang')
let rowThird = 4
let columnThird = 8
for(let i = 0; i < rowThird; i++){
	let textThird = ''
	for(let j = 0; j < columnThird; j++){
		textThird += '#'
	}
	console.log(textThird)
}
console.log('--------------------------------')
console.log('No.4 Membuat tangga')
let rowFourth = 7
for(let i = 0; i <= rowFourth; i++){
	let textFourth = ''
	for(let j = 0; j < i; j++){
		textFourth += '#'
	}
	console.log(textFourth)
}

console.log('--------------------------------')
console.log('No.5 Membuat papan catur menggunakan while & for')
let jumlahBaris = 8
let jumlahKolom = 8
let inc = 1
while(inc < jumlahBaris){
	let barisGenap = '|'
	let barisGanjil = '|'
	if(inc%2 === 0){
		// genap
		for(let j = 0; j < jumlahKolom; j++){
			if(j%2===0){
				barisGenap += '#'
			}else{
				barisGenap += ' '
			}
		}
		barisGenap += '|'
		console.log(barisGenap)
	}else{
		// ganjil
		for(let j = 0; j < jumlahKolom; j++){
			if(j%2===1){
				barisGanjil += '#'
			}else{
				barisGanjil += ' '
			}
		}
		barisGanjil+= '|'
		console.log(barisGanjil)
	}
	inc++
}

console.log('--------------------------------')
console.log('No.5 Membuat papan catur menggunakan for')
let rowFifth = 4
let columnFifth = 8
for(let i = 0; i < rowFifth; i++){
	let evenBlock = '|'
	let oddBlock = '|'
	for(let j = 0; j < columnFifth; j++){
		if(j%2===0){
			evenBlock += ' '
			oddBlock += '#'
		}else{
			evenBlock += '#'
			oddBlock += ' '
		}
	}
	oddBlock += '|'
	evenBlock += '|'
	console.log(evenBlock)
	console.log(oddBlock)
}

console.log('--------------------------------')
