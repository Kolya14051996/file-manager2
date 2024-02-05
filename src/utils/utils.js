import fs from 'fs';

export const getCurrentPosition = () => {
	return process.cwd();
};

export const printCurrentPosition = () => {
	const cwd = process.cwd();
	console.log(`You are currently in ${cwd}`);
};

export const getPathFromInput = (input) => {
	let processedInput = input.toString().trim();

	const spaceIndex = processedInput.indexOf(' ');

	if (spaceIndex !== -1) {
		processedInput = processedInput.slice(spaceIndex + 1).trim();
	}
  

	return processedInput;
};

export const getTwoPathsFromInput = (input) => {
	let processedInput = input.toString().trim();
	const parts = processedInput.split(' ');
	const firstPathFromInput = parts[1];
	const secondPathFromInput = parts[2];

	if (parts.length !== 3) {
		return {firstPathFromInput, secondPathFromInput};
	}

	return {firstPathFromInput, secondPathFromInput};
};

export const isFileExist = (filePath) => {
	return new Promise((resolve) => {
		fs.access(filePath, fs.constants.F_OK, (err) => {
			if (err) {
				resolve(false);
			} else {
				resolve(true);
			}
		});
	});
};

export const getUsername = () => {
	const args = process.argv.slice(2);
	const usernameArg = args.find((arg) => arg.startsWith('--username='));
	if (usernameArg) {
		return usernameArg.split('=')[1];
	} else {
		console.error(
			'No username provided. Please start the program with "npm start --  --username=your_name" argument.'
		);
		process.exit(1);
	}
};


export const closeProgram = (username) => {
	console.log(`Thank you for using File Manager, ${username}, goodbye!`);
	process.exit(0);
};