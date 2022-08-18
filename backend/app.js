//* GLOBALS
// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// console.log(__dirname)

//* IMPORT MODULES
// const names = require('./modules/names');
// console.log(names);
// const sayHi = require('./modules/sayHi');
// sayHi('roland');
// sayHi(names.name1);

//* OS
// const os = require('os');

//* PATH
// const path = require('path');

//* FS
// const fs = require('fs');
// writeFileSync blocks our code execution and we have to wait for it to finish
// const { readFileSync, writeFileSync } = require('fs');

// reading from files
// const firstFile = readFileSync('./files/first.txt', 'utf8');
// const secondFile = readFileSync('./files/second.txt', 'utf8');
// console.log(firstFile, secondFile);

// writeFileSync(path where to create file, what to write to file)
// if the file doesn't exists node will create it
// writeFileSync(
// 	'./files/newFile.txt',
// 	`new file content ${firstFile}, ${secondFile}`
// );

// 3rd argument is options, allows us to append to file for example
// writeFileSync(
// 	'./files/newFile.txt',
// 	`new file content ${firstFile}, ${secondFile}`,
// 	{ flag: 'a' }
// );

// async, allows us to pass callback
// const { readFile, writeFile } = require('fs');

// readFile('./files/first.txt', 'utf8', (err, result) => {
// 	if (err) {
// 		return console.log(err);
// 	}
// 	console.log(result);
// });

//* HTTP
// const http = require('http');
// const server = http.createServer((req, res) => {
// 	// console.log(req);
// 	if (req.url === '/') {
// 		res.end('homepage');
// 	} else if (req.url === '/about') {
// 		res.end('about page');
// 	} else {
// 		res.end(`
//     <h1>404 page not found</h1>
//     <a href="/">home</a>
//     `);
// 	}

// 	// res.write('server running');
// 	// res.end();
// });

// server.listen(5000);

//* NPM
// local dependency - will install only for this project
// npm i packageName

// global dependency
// npm i -g pacpageName

// dev dependency
// npm i pacpageName -D

// npm init - initialize package.json fle that has project info

// const _ = require('lodash');
// const items = [1, [2, [3, [4]]]];
// const newItems = _.flattenDeep(items);
// console.log(newItems);

//* SYNC - BLOCKING PATTERN
// const http = require('http');

// const server = http.createServer((req, res) => {
// 	if (req.url === '/') {
// 		res.end('Home Page');
// 	}
// 	if (req.url === '/about') {
// 		// blocking code
// 		for (let i = 0; i < 1000; i++) {
// 			for (let j = 0; j < 1000; j++) {
// 				console.log(`${i} ${j}`);
// 			}
// 		}
// 		res.end('About Page');
// 	}
// 	res.end('Error Page');
// });

// server.listen(5000, () => {
// 	console.log('Server listening on port : 5000....');
// });

//* ASYNC
// const { readFile, writeFile } = require('fs').promises;

// const start = async () => {
// 	try {
// 		const first = await readFile('./files/first.txt', 'utf8');
// 		const second = await readFile('./files/second.txt', 'utf8');
// 		await writeFile('./files/result.txt', `result : ${first} ${second}`, {
// 			flag: 'a',
// 		});
// 		console.log(first, second);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// start();

//* STREAMS
// const { writeFileSync } = require('fs');
// for (let i = 0; i < 10000; i++) {
// 	writeFileSync('./files/big.txt', `hello world ${i}\n`, { flag: 'a' });
// }

// const { createReadStream } = require('fs');

// // default 64kb
// // last buffer - remainder
// // highWaterMark - control size
// // const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// // const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
// const stream = createReadStream('./files/big.txt');

// stream.on('data', result => {
// 	console.log(result);
// });
// stream.on('error', err => console.log(err));

//* HTTP STREAM
// const http = require('http');
// const fs = require('fs');

// http
// 	.createServer(function (req, res) {
// 		// const text = fs.readFileSync('./content/big.txt', 'utf8')
// 		// res.end(text)
// 		const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
// 		fileStream.on('open', () => {
// 			fileStream.pipe(res);
// 		});
// 		fileStream.on('error', err => {
// 			res.end(err);
// 		});
// 	})
// 	.listen(5000);
