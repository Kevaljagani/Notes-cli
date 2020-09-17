const fs = require("fs")
const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./notes.js");

//add

yargs.command
(
	{
		command: "add",
		describe: "add a new note",
		builder: 
		{
			title: 
				{
					describe: "Note Title",
					demandOption: true,
					type: "string"
				},
			body: 
				{
					describe: "body of your note",
					demandOption: true,
					type: "string"
				}
		},
		handler: function(argv)
			{
				console.log(chalk.yellow("Hold on! Adding A Note"))
				console.log(argv.title, argv.body)
				notes.addNote(argv.title, argv.body)
			}
	
	}
)

//remove

yargs.command(
{

	command: "remove",
	describe: "remove note",
	builedr: 
	{
		title:
		{
			describe: "note title",
			demandOption: true,
			type: "string"
		}
	},
	handler: function(argv)
	{
		console.log(chalk.yellow("Hold on! Removing A Note"))
		notes.removeNote(argv.title)
	}
	
})

//list

yargs.command(
{

	command: "list",
	describe: "list all notes",
	handler: function()
	{
		console.log(chalk.yellow("Hold on! Listing Notes"))
		notes.listNotes()
	}
	

})

//read

yargs.command(
{
	command: "read",
	describe: "read a note",
	builder:
	{
		title:
		{
			describe: "note title",
			demandOption: true,
			type: "string"
		}
	},
		handler: function(argv){
		console.log(chalk.yellow("Hold on! Reading A Note"))
		notes.readNote(argv.title)
	}
})

yargs.parse()



