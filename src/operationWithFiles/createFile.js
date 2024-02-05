import fs from 'fs'
import { printCurrentPosition, getCurrentPosition } from '../utils/utils.js';


export const createFile = (fileName) => {
	const currentPath = getCurrentPosition();
	const filePath = path.resolve(currentPath, fileName);

	isFileExist(filePath)
		.then((fileExists) => {
			if (!fileExists) {
				fs.writeFile(filePath, '', (error) => {
					if (error) {
						console.error(`Failed to create file ${fileName}.`);
					} else {
						console.log(`File ${fileName} created successfully.`);
						printCurrentPosition();
					}
				});
			} else {
				console.log(`${filePath} already exists.`);
				printCurrentPosition();
			}
		})
		.catch((err) => {
			console.error(`ERROR: ${err}`);
		});
};