import fs from 'fs';
import path from 'path';
import {isFileExist, printCurrentPosition} from '../utils/utils.js';

export const moveFile = async ({firstPathFromInput, secondPathFromInput}) => {
	const filePath = firstPathFromInput;
	const dirPath = secondPathFromInput;

	if (!filePath || !dirPath) {
		console.log('You entered wrong path or name, try again.');
		printCurrentPosition();
		return;
	}

	try {
		const filePathExists = await isFileExist(filePath);

		if (!filePathExists) {
			console.log(`File '${filePath}' doesn't exist`);
			printCurrentPosition();
			return;
		}

		const fileName = path.basename(filePath);
		const destinationDirPath = path.join(dirPath, fileName);

		const readStream = fs.createReadStream(filePath);
		const writeStream = fs.createWriteStream(destinationDirPath);

		readStream.pipe(writeStream);

		writeStream.on('finish', () => {
			console.log(`File '${fileName}' moved successfully to '${dirPath}'.`);
			fs.unlink(filePath, () => {});
			printCurrentPosition();
		});

		writeStream.on('error', () => {
			console.error(
				`Failed to move file '${fileName}' to '${destinationDirPath}'.`
			);
			printCurrentPosition();
		});
	} catch (error) {
		console.log(error);
	}
};
