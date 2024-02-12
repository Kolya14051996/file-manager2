import fs from 'fs';
import crypto from 'crypto';
import {isFileExist, printCurrentPosition} from '../utils/utils.js';

export const hashFile = async (filePath) => {
	const fileExist = await isFileExist(filePath);
	if (!fileExist) {
		console.log(`Enter correct command or path`);
		printCurrentPosition();
		return;
	}

	const hash = crypto.createHash('sha256');

	const fileStream = fs.createReadStream(filePath);

	fileStream.on('data', (data) => {
		hash.update(data);
	});

	fileStream.on('end', () => {
		const fileHash = hash.digest('hex');
		console.log(`Hash of file '${filePath}': ${fileHash}`);
		printCurrentPosition()
	});

	fileStream.on('error', () => {});
};
