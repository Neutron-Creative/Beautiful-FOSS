// Require prompts, for user prompts
const prompts = require('prompts');

// Require chalk, for colorful cmd line output
const chalk = require('chalk');

// Get info from package.json
const package = require('./package.json');

(async() => {
	// CLI arguments
	let options = [];

	// Arguments that will redirect script at beginning
	// ex: generate only readme, generate only images, etc.
	const stopping_args = ['-r', '--readme', '-i', '--images', '-w', '--www'];

	// Parse CLI arguments
	for(let i=0;i<process.argv.length;i++) {
		if(process.argv[i].substr(0,1) == '-') options.push(process.argv[i]);
	}
	
	// Stopping variables used?
	// Default is false
	let stopping = false;

	// Compare arrays to see if options contains stopping arguments
	for(let i=0;i<stopping_args.length;i++) {
		if(options.includes(stopping_args[i])) stopping = true;
	}

	// Welcome users to Beautiful FOSS
	console.log(chalk.cyan('==================================='));
	console.log('\n');
	console.log(chalk.bold.underline.magenta('Welcome to Beautiful FOSS!'));
	console.log(chalk.dim.gray('Current version: ', package.version));
	console.log(chalk.dim.gray('Built by Neutron Creative Inc.'));
	console.log('\n');
	console.log(chalk.cyan('==================================='));

	// Prompt user for generic project information
	const project_info = await prompts([
		{
			type: 'text',
			name: 'name',
			message: 'What is the project name?'
		},
		{
			type: 'text',
			name: 'description',
			message: 'What is the project description?'
		},
		{
			type: 'text',
			name: 'logo',
			message: 'What is the project logo?'
		}
	]);

	console.log(project_info);

	// Begin readme generation
	// If stopping variables present, check for readme args
	if(stopping) {
		if(options.includes('-r'));
		if(options.includes('--readme'));
		return false;
	} else {
		// Else, generate readme by default
		let readme = await generate_readme(project_info);
	}

	async function generate_readme(project_info) {
		
	}
})();
