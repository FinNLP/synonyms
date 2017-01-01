const synonyms = require('./index.js');
const readline = require('readline');
var input = "";
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
	if (key && key.ctrl && key.name === 'c') process.exit();
	else if(key && key.name === 'backspace') input.substr(0,input.length-1);
	else if(key && key.name === 'return') {
		console.log("",synonyms(input.toLowerCase()));
		input = "";
	}
	else {
		process.stdout.write(str);
		input = input + str;
	}
});