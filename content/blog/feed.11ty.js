/**
 * @file Defines the blog post feed template
 */

/**
 * Frontmatter in JavaScript templates
 * @type {Object}
 * @see {@link https://www.11ty.dev/docs/data-frontmatter/#javascript-object-front-matter 11ty docs}
 */
exports.data = {
	title: "Blog",
	layout: "layouts/feed.11ty.js",
	eleventyExcludeFromCollections: true,
	permalink: "blog/index.xml",
};

/**
 * Uses the feedItems shortcode to generate an Atom feed for the blog collection.
 * @param {Object} data - Eleventy data object
 * @returns {String} - Atom feed markup
 */
exports.render = function (data) {
	return `
		${this.feedItems(data.collections.blog, true, 1)}
	`;
};
