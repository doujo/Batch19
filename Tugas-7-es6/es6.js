// No.1 Arrow function ES6
const golden = () => {
	console.log("this is golden!!")
}
console.log('No.1 Mengubah fungsi menjadi fungsi arrow')
console.log('-----------------------------------------')
golden()
console.log('\n')

// No.2 Object literal ES6
const newFunction = (firstName, lastName) => {
	return {
		firstName,
		lastName,
		fullName: () => {
			console.log(`${firstName} ${lastName}`)
		}
	}
}
console.log('No.2 Sederhanakan menjadi object literal di ES6')
console.log('-----------------------------------------')
newFunction("William", "Imoh").fullName()
console.log('\n')

// No.3 Destructuring ES6
const newObject = {
	firstName: 'Harry',
	lastName: 'Potter Holt',
	destination: 'Hofwarts React Conf',
	occupation: 'Deve-wizard Avocado',
	spell: 'Vimulus Renderus!!!'
}
const {firstName, lastName, destination, occupation} = newObject
console.log('No.3 Destructuring')
console.log('-----------------------------------------')
console.log(firstName, lastName, destination, occupation)
console.log('\n')


// No.4 Array Spreading ES6
const west = ['Will', 'Chris', 'Sam', 'Holly']
const east = ['Gill', 'Brian', 'Noel', 'Maggie']
const combined = [...west, ...east]
console.log('No.4 Array Spreading')
console.log('-----------------------------------------')
console.log(combined)
console.log('\n')

// No.5 Template Literals ES6
const planet = 'earth'
const view = 'glass'
let before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}, do eiusmod tempor incididuct ut labore et dolore magna aliqua. Ut enim ad minim veniam`
console.log('No.5 Template Literals')
console.log('-----------------------------------------')
console.log(before)
