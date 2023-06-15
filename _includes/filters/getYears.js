/**
 * @file Defines the getYears filter, which returns an array of years from a collection of posts
 */

module.exports = function (collection) {
	return [...new Set(collection.map((post) => post.date.getFullYear()))];
};