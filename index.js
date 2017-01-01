const dictionary = require('./dictionary.js');
const synonyms = function(word,type){
	word = (word || "").toLowerCase();
	type = (type || "").toLowerCase();
	var entry = dictionary[word] || deep(word); // doesn't exist
	if(!entry) return undefined;
	else if(type) return entry[type];
	else return entry;
};

function deep(wordR){
	var synonyms = {};
	for(var entry in dictionary){
		for(var type in dictionary[entry]){
			if(~dictionary[entry][type].indexOf(wordR)) {
				if(!synonyms[type]) synonyms[type] = [wordR];
				synonyms[type].push(entry);
			}
		}
	}
	return Object.keys(synonyms).length ? synonyms : undefined;
}

synonyms.dictionary = dictionary;
module.exports = synonyms;