const commands = [
  'up',
  'cd path_to_directory',
  'ls',
  'cat path_to_file',
  'add new_file_name',
  'cp path_to_file path_to_new_directory',
  'mv path_to_file path_to_new_directory',
  'rm path_to_file',
  'os --EOL',
  'os --cpus',
  'os --homedir',
  'os --username',
  'os --architecture',
  'hash path_to_file',
  'compress path_to_file path_to_destination',
  'decompress path_to_file path_to_destination',
  '.exit'
];

export const commandsOs = [
  '--EOL',
  '--cpus',
  '--homedir',
  '--username',
  '--architecture',
  'os'
]




const printCommands = () => {
  console.log('List of available commands:');
  commands.forEach((command) => {
      console.log(command);
  });
  console.log('enter your command');
};


export { printCommands };