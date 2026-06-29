#!/usr/bin/env node
const { findImageInImage, takescreenshot } = require('./util');
const path = require('path');

const args = process.argv.slice(2);
const cmd = args[0];

function printHelp() {
	if (require.main === module) {
		console.log(`
node . shot test.png
node . shot test2.png
node . find test.png test2.png
`);
	} else {
		console.log(`
Usage:
  node index.js shot <filename>      - Take a screenshot and save it as <filename>
  node index.js find <big> <small>   - Find the position of <small> image within <big> image
`);
	}
}
if (!cmd || cmd === 'help') {
	printHelp();
	process.exit(0);
}

if (cmd === 'find') {
	const [big, small] = [args[1], args[2]];
	if (!big || !small) {
		console.log('Kullanım: find <büyük_resim> <küçük_resim>');
		process.exit(1);
	}
	console.time('Arama Süresi');
	findImageInImage(big, small).then(res => {
		console.timeEnd('Arama Süresi');
		console.log('Bulunan Konum:', res);
	}).catch(e => {
		console.error('Hata:', e);
	});
	return;
}

if (cmd === 'shot') {
	const dosya = args[1];
	if (!dosya) {
		console.log('Kullanım: shot <dosya_adı>');
		process.exit(1);
	}
	takescreenshot(dosya);
	console.log('Ekran görüntüsü alınıyor:', dosya);
	return;
}

console.log('Bilinmeyen komut:', cmd);
printHelp();
