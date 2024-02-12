import {isFileExist, printCurrentPosition} from '../utils/utils.js';
import path from 'path';
import fs from 'fs';

export const renameFile = async ({
	firstPathFromInput = '',
	secondPathFromInput = '',
}) => {
	const filePath = firstPathFromInput;
	const newName = secondPathFromInput;

	if (!filePath || !newName) {
		console.log('You entered wrong path or name, try again.');
		printCurrentPosition();
		return;
	}

	try {
		const exists = await isFileExist(filePath);
		if (!exists) {
			console.log(`File '${filePath}' doesn't exist`);
			printCurrentPosition();
			return;
		}

		const newFilePath = path.join(path.dirname(filePath), newName);

		fs.rename(filePath, newFilePath, (error) => {
			if (error) {
				console.error(`Failed to rename file: ${error}`);
				return;
			}
			console.log(`File '${filePath}' renamed to '${newName}' successfully.`);
			printCurrentPosition();
		});
	} catch (error) {
    console.log(error);
  }
};
