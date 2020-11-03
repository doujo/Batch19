// if else
function startGame(nama, peran){
	if(nama != ''){
		console.log(`Selamat datang di Dunia Werewolf, ${nama}`)
		if(peran == 'Penyihir'){
			console.log(`Halo Penyihir ${nama}, kamu dapat melihat siapa yang menjadi werewolf!`)
		}else if(peran == 'Guard'){
			console.log(`Halo Guard ${nama}, kamu akan membantu melindungi temanmu dari serangan werewolf.`)
		}else if(peran == 'Werewolf'){
			console.log(`Halo Werewolf ${nama}, Kamu akan memakan mangsa setiap malam!`)
		}else{
			console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
		}
	}else{
		console.log("Nama harus diisi!")
	}
}

console.log("IF ELSE")
console.log("---------------------------------------------------------")

console.log("Output untuk Input nama = '' dan peran = ''")
startGame("","")
console.log("---------------------------------------------------------")

console.log("Output untuk Input nama = 'John' dan peran = ''")
startGame("John","")
console.log("---------------------------------------------------------")

console.log("Output untuk Input nama = 'Jane' dan peran 'Penyihir'")
startGame("Jane","Penyihir")
console.log("---------------------------------------------------------")

console.log("Output untuk Input nama = 'Jenita' dan peran 'Guard'")
startGame("Jenita","Guard")
console.log("---------------------------------------------------------")

console.log("Output untuk Input nama = 'Junaedi' dan peran 'Werewolf'")
startGame("Junaedi","Werewolf")
console.log("---------------------------------------------------------")
console.log("\n")

var tanggal = 21;
var bulan = 1;
var tahun = 1945;
var validasi = true;

console.log("Switch case")
console.log("---------------------")
console.log('-----INPUT DATA------');
console.log('Tanggal : ' + tanggal);
console.log('Bulan : ' + bulan);
console.log('Tahun : ' + tahun);
console.log('---------------------');

if(tanggal >= 1 && tanggal <= 31){
	tanggal = tanggal
}else{
	validasi = false;
	console.log('Inputan tanggal keliru, isi dengan angka antara 1 - 31');
}

if(bulan >= 1 && bulan <= 12){
	switch(bulan){
		case 1: { bulan = "Januari"; break; }
		case 2: { bulan = "Februari"; break; }
		case 3: { bulan = "Maret"; break; }
		case 4: { bulan = "April"; break; }
		case 5: { bulan = "Mei"; break; }
		case 6: { bulan = "Juni"; break; }
		case 7: { bulan = "Juli"; break; }
		case 8: { bulan = "Agustus"; break; }
		case 9: { bulan = "September"; break; }
		case 10: { bulan = "Oktober"; break; }
		case 11: { bulan = "November"; break; }
		case 12: { bulan = "Desember"; break; }
	}
}else{
	validasi = false;
	console.log('Inputan bulan keliru, isi dengan angka antara 1 - 12');
}

if(tahun >= 1900 && tahun <= 2200){
	tahun = tahun
}else{
	validasi = false;
	console.log('Inputan tahun keliru, isi dengan angka antara 1990 - 2200');
}

if(validasi === true){
	console.log(`Result : ${tanggal} ${bulan} ${tahun}`)
}
