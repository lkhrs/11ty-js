/**
 * @file Defines a filter that returns an array of tags, with specific tags removed.
 */

/**
 * Returns an array of tags, with specific tags removed.
 * @param  {Array} tags - The array of tags.
 * @return {Array} An array of tags, with specific tags removed.
 */

module.exports = (tags) => {
	return (tags || []).filter(
		(tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
	);
};