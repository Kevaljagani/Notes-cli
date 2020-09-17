console.log("utils.js")


//const fs = require("fs")


const add = function(a,b)
{
	return a+b;
}

/*
{
	return "hello"
}

const addNote = function (title,body) {
	const notes = loadNotes()
	console.log(notes)
}

const loadNotes = function() {

	try{
		const dataBuffer = fs.readFineSync("notes.json")
			const dataJSON = dataBuffer.tostring()
			return JSON.parse(dataJSON)
}
catch (e) {
	return []
}
	
}
*/

module.exports = { add };
