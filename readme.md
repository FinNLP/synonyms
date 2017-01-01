# Synonyms

JavaScript library to return the synonyms of the word Edit

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

## License
The MIT License