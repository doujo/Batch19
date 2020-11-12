// release 0
class Animal{
	constructor(name){
		this._name = name
		this._legs = 4
		this._cold_blooded = false
	}

	get name(){
		return this._name
	}

	get legs(){
		return this._legs
	}

	get cold_blooded(){
		return this._cold_blooded
	}
}

console.log('Release 0')
const sheep = new Animal("shaun")
console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)
console.log('\n')


// release 1
class Ape extends Animal{
	constructor(name){
		super(name)
		this._legs = 2
	}

	yell(){
		console.log("Auooo")
	}
}

class Frog extends Animal{
	constructor(name){
		super(name)
	}

	jump(){
		console.log("hop hop")
	}
}

console.log('Release 1')
const sungokong = new Ape("Kera Sakti")
sungokong.yell()

const kodok = new Frog("buduk")
kodok.jump()
console.log('\n')


// function to class
class Clock{
	constructor({template}, timer){
		this._template = template
		this._timer = timer
	}

	render(){
		let date = new Date()

		let hours = date.getHours()
		if (hours < 10) hours = '0' + hours

		let mins = date.getMinutes()
		if (mins < 10) mins = '0' + mins

		let secs = date.getSeconds()
		if (secs < 10) secs = '0' + secs

		const output = this._template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', secs)

		console.log(output)
	}

	stop(){
		clearInterval(timer)
	}

	start(){
		this.render()
		this._timer = setInterval(this.render.bind(this), 1000)
	}

}
console.log('Function To Class')
const clock = new Clock({template: 'h:m:s'})
clock.start()
