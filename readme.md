# Synonyms

JavaScript library to return the synonyms of the word Edit - 27779 words.

## Installation & Usage

`npm install synonyms --save`

```javascript
var synonyms = require("synonyms");

synonyms("screen");
// returns an object like this:
{
	n:['screen','cover','covert','concealment'],
	v:['screen','sieve','sort','test']
}

synonyms("screen","v");
// returns an array like this:
['screen','sieve','sort','test']

synonyms.dictionary
// returns the whole dictionary
```

## Size

This library has 27779 words in it's dictionary.

Expanding the dictionary must be through the file `src.json` then run `node build` to build a new dictionary. 

The dictionary `src.json` file is around 1.3MB while the minified and built version (`dictionary.js`) is less than 0.7MB.

## License
The MIT License