import os from 'os';
import { printCurrentPosition} from '../utils/utils.js';
import {commandsOs} from '../utils/commands.js';

export const initOs = (input) => {
	if (input === 'os') {
		console.log('Enter correct command');
	}

	if (input === '--EOL') {
		const platform = os.platform();
		const eol = os.EOL;

		console.log(`Operating system platform: ${platform}`);
		console.log(`End-Of-Line character for the current system: '${eol}'`);
	}

	if (input === '--cpus') {
		const cpus = os.cpus();
		cpus.forEach((cpu, index) => {
			console.log(`CPU ${index + 1}:`);
			console.log(`  Model: ${cpu.model}`);
			console.log(`  Speed: ${cpu.speed / 1000} GHz`);
		});
	}

	if (input === '--homedir') {
		const homedir = os.homedir();
		console.log(`Home directory: ${homedir}`);
	}

	if (input === '--username') {
		const username = os.userInfo().username;
		console.log(`Username: ${username}`);
	}

	if (input === '--architecture') {
		const architecture = os.arch();
		console.log(`CPU architecture: ${architecture}`);
	}

	if (!commandsOs.includes(input)) {
		console.log('You entered wrong command');
	}
	printCurrentPosition();
};
