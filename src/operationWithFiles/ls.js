import fs from 'fs';

import {getCurrentPosition, printCurrentPosition} from '../utils/utils.js';

export const ls = () => {
	fs.readdir(getCurrentPosition(), {withFileTypes: true}, (err, files) => {
		if (err) {
			console.error(`Failed to list files: ${err}`);
			printCurrentPosition();
			return;
		}

		const folders = [];
		const filesArray = [];
		files.forEach((file) => {
			if (file.isDirectory()) {
				folders.push(file);
			} else {
				filesArray.push(file);
			}
		});

		folders.sort((a, b) => a.name.localeCompare(b.name));
		filesArray.sort((a, b) => a.name.localeCompare(b.name));

		const sortedFiles = [...folders, ...filesArray];

		const tableData = sortedFiles.map((file) => ({
			Name: file.name,
			Type: file.isDirectory() ? 'directory' : 'file',
		}));

		console.table(tableData);
		printCurrentPosition();
	});
};
