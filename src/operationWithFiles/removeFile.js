import fs from 'fs';
import {printCurrentPosition, isFileExist} from '../utils/utils.js';
import path from 'path';

const removeFile = async (filePath) => {
	try {
		const fileExists = await isFileExist(filePath);
		if (!fileExists) {
			console.log(`You entered wrong path or name, try again.`);
      printCurrentPosition()
			return;
		}
		const nameFile = path.basename(filePath);
		await fs.promises.unlink(filePath);
		console.log(`File '${nameFile}' has been successfully removed.`);
		printCurrentPosition();
	} catch (error) {
		console.log(`Failed to remove file '${filePath}'`);
    printCurrentPosition()
	}
};

export {removeFile};
