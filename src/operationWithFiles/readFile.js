import fs from 'fs';
import path from 'path';

import {isFileExist, printCurrentPosition} from '../utils/utils.js';

export const readFile = async (pathFile) => {
	isFileExist(pathFile)
		.then((exists) => {
			if (!exists) {
				console.error(`You entered wrong path or name, try again.`);
				printCurrentPosition();
				return;
			}

			const readStream = fs.createReadStream(pathFile, 'utf-8');

			let content = '';

			readStream.on('data', (chunk) => {
				content += chunk;
			});

			readStream.on('end', () => {
				console.log(content);
				printCurrentPosition();
			});

			readStream.on('error', (error) => {
				console.error(`Failed to read file ${pathFile}. ${error.message}`);
				printCurrentPosition();
			});
		})
		.catch((error) => {
			console.error(`Error checking file existence: ${error.message}`);
			printCurrentPosition();
		});
};
