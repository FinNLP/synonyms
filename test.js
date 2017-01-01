const synonyms = require('./index.js');
const assert = require('assert');
describe('synonyms', function () {
	it('get synonyms with type define', function () {
		assert.equal(Array.isArray(synonyms("existent","a")),true);
	});
	it('get synonyms with type not defined', function () {
		assert.equal(typeof synonyms("existent"),"object");
	});
	it('get dictionary', function () {
		assert.equal(typeof synonyms.dictionary,"object");
	});
	it('non existent word', function () {
		assert.equal(synonyms("asdfghjkl"),undefined);
	});
	it('non existent type', function () {
		assert.equal(synonyms("dictionary","asdfghjkl"),undefined);
	});
	it('marked & deep', function () {
		assert.equal(Array.isArray(synonyms("vibrate","v")),true);
	});
});
