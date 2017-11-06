const fs = require('fs');
const path = require('path');

const directory = path.resolve(__dirname,'../src/entry/');
const entryList = {};

(getEntry = (dir) =>{

	const entryArr = fs.readdirSync(dir);
	let pathName,filePath;

	entryArr.forEach(function(fileName){

		filePath = dir + '/' +fileName;
		if(fs.statSync(filePath).isDirectory()){

			getEntry(fileName);

		}else{

			pathName = filePath.split('entry/')[1].replace('.js','');
			entryList[pathName] = filePath;

		}
	})

})(directory)

module.exports = entryList;