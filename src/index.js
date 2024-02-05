import { ls} from './operationWithFiles/ls.js';
import {createFile} from './operationWithFiles/createFile.js'
import {navigateUp, changeDirectory} from './operationWithFiles/navigate.js';
import {readFile} from './operationWithFiles/readFile.js';
import {printCommands} from './utils/commands.js';
import {
	printCurrentPosition,
	getPathFromInput,
	getTwoPathsFromInput,
	getUsername,
	closeProgram
} from './utils/utils.js';
import {renameFile} from './operationWithFiles/renameFile.js';
import {moveFile} from './operationWithFiles/moveFile.js'

import os from 'os';
import { copyFile } from './operationWithFiles/copyFile.js';
import { removeFile } from './operationWithFiles/removeFile.js';
import { initOs } from './operationSystem/main.js';

const start = async () => {
	const username = getUsername();
	process.on('SIGINT', () => {
		closeProgram(username);
	});
	process.stdin.on('data', (data) => {
		const userInput = data.toString().trim();
		if (userInput === '.exit') {
			closeProgram(username);
		}
		if (userInput === 'up') {
			navigateUp();
		}
		if (userInput.startsWith('cd')) {
			changeDirectory(userInput);
		}
		if (userInput.startsWith('add')) {
			createFile(getPathFromInput(userInput));
		}
		if (userInput.startsWith('ls')) {
			ls();
		}
		if (userInput.startsWith('cat')) {
			readFile(getPathFromInput(userInput));
		}

		if (userInput.startsWith('rn')) {
			renameFile(getTwoPathsFromInput(userInput));
		}
		if (userInput.startsWith('cp')) {
			copyFile(getTwoPathsFromInput(userInput));
		}
		if (userInput.startsWith('mv')) {
			moveFile(getTwoPathsFromInput(userInput));
		}
		if (userInput.startsWith('rm')) {
			removeFile(getPathFromInput(userInput));
		}
		if(userInput.startsWith('os')){
			initOs(getPathFromInput(userInput))
		}
	});

	console.log(`Welcome to the File Manager, ${username}!`);
	const homedir = os.homedir();
	process.chdir(homedir);
	printCurrentPosition();
	printCommands();
};



await start()
