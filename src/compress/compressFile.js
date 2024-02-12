import fs from 'fs';
import zlib from 'zlib';
import {printCurrentPosition, isFileExist} from '../utils/utils.js';
import path from 'path';

export const compressFile = async ({
	firstPathFromInput,
	secondPathFromInput,
}) => {
	const filePath = firstPathFromInput;
	const destinationDir = secondPathFromInput;

	if (!filePath || !destinationDir) {
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
		const compressedFileName = fileName + '.br';
		const compressedFilePath = path.join(destinationDir, compressedFileName);

		const outputStream = fs.createWriteStream(compressedFilePath);
		const gzipStream = zlib.createBrotliCompress();
		const inputStream = fs.createReadStream(filePath);

		inputStream.pipe(gzipStream).pipe(outputStream);

		outputStream.on('finish', () => {
			console.log(
				`File '${filePath}' compressed successfully to '${compressedFilePath}'.`
			);
			printCurrentPosition();
		});

		outputStream.on('error', (error) => {
			console.error(`Failed to compress file '${filePath}'. ${error.message}`);
			printCurrentPosition();
		});
	} catch (error) {
		console.error(error);
	}
};
