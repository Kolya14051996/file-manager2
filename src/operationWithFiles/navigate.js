import path from 'path';
import {
	getCurrentPosition,
	printCurrentPosition,
	getPathFromInput,
} from '../utils/utils.js';


import fs from 'fs';

const navigateUp = () => {
	const currentDirectory = getCurrentPosition();
	const parentDirectory = path.resolve(currentDirectory, '..');
	process.chdir(parentDirectory);
	printCurrentPosition();
};

const changeDirectory = (directoryPath) => {
	const resolvedPath = path.resolve(getPathFromInput(directoryPath));

	fs.access(resolvedPath, fs.constants.F_OK, (err) => {
		if (err) {
			console.error(`Directory ${resolvedPath} does not exist.`);
		} else {
			process.chdir(resolvedPath);
		}
		printCurrentPosition();
	});
};

export {changeDirectory};

export {navigateUp};
