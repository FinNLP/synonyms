const dictionary = require('./dictionary.js');
const synonyms = function(word,type){
	var entry = dictionary[word] || deep(word,type); // doesn't exist
	if(!entry) return undefined;
	else if(type) return entry[type];
	else return entry;
};

function deep(wordR,typeR){
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