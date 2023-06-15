/**
 * @file Imports modules and sets up Eleventy configuration.
 */

const filters = require("./filters/index.js");
const shortcodes = require("./shortcodes/index.js");

/**
 * Set up Eleventy configuration.
 * @module _includes/
 * @param {Object} eleventyConfig - The Eleventy configuration object.
 * @see {@link https://www.11ty.dev/docs/config/ 11ty docs}
 * @see {@link https://www.11ty.dev/docs/filters/ 11ty docs}
 * @see {@link https://www.11ty.dev/docs/shortcodes/ 11ty docs}
 */
module.exports = function (eleventyConfig) {
	filters(eleventyConfig);
	shortcodes(eleventyConfig);

	return;
};