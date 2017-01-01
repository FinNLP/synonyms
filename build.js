const fs = require('fs');
var src = fs.readFileSync("./src.json","utf8");
var words = src.match(/\n      "\w+"/gmi).map((x)=>x.replace(/\s|"/g,""));

var counts = {};

// populate the count object
for(var i = 0; i< words.length; i++) {
    var num = words[i];
    counts[num] = counts[num] ? counts[num]+1 : 1;
}

// process it for those that are more than 2
var n = 0;
var adding = "";

for (var word in counts) {
	if(counts[word] > 3 && word.length > 6) {
		n++;
		console.log("replacing:",word,counts[word],n);
		adding = `_${n}="${word}",\n` + adding;
		src = src.replace(new RegExp(`\\n      "${word}",`,"g"),`_${n},`);
	}
}

src = src.replace(/\n {1,4}"(\w+)"(:)/g,"$1$2").replace(/\s/g,"");
src = "var " + adding.replace(/\s/g,"") +"\_ ="+src+";module.exports = _";
fs.writeFileSync("dictionary.js",src);