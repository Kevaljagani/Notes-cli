const fs = require("fs")
const chalk = require("chalk")



const addNote = function (title,body)
{
	const notes = loadNotes()
	const duplicateNotes = notes.find(function(note)
	{
		return note.title === title
	
	})

	if (!duplicateNotes)
	{
		notes.push({
		title: title,
		body: body
		})
		saveNotes(notes)
		console.log(chalk.green.inverse("Note Added SuccessFully"))
	}
	else {
		console.log(chalk.red.inverse("Uh Oh! Note alerady exists"))
	}
}

const saveNotes = function(notes)
	{
		const dataJSON = JSON.stringify(notes)
		fs.writeFileSync("notes.json", dataJSON)
	}


const loadNotes = function() 
{

	try
	{
		const dataBuffer = fs.readFileSync("notes.json")
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)
	}
	catch (e)
	{
		console.log("error")
		return []
	}
	
}



const removeNote = function (title)
	{
		const notes = loadNotes()
		const notesToKeep = notes.filter(function(note){
		return note.title !== title
	})

	
	
	saveNotes(notesToKeep)
	if (notes.length > notesToKeep.length)
	{
		console.log(chalk.green.inverse("Note Removed SuccessFully"))
	}
	else{
		console.log(chalk.red.inverse("No Note Found"))
	}
	
}

//list

const listNotes = function()
{

	const notes = loadNotes()
	
	notes.forEach(function (note)
	{
		console.log(note.title)
	})
}


//read

const readNote = function(title)
	{
		const notes = loadNotes()
		const foundNotes = notes.find(function(note)
		{
			return note.title === title
		})

		if(foundNotes)
		{
			console.log(chalk.green.inverse(foundNotes.title))
			console.log(chalk.yellow(foundNotes.body))
		}
		else{
			
		}
	}

module.exports = { addNote, removeNote, listNotes, readNote };
