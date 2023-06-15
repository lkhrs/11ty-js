/**
 * @file Imports modules and sets up Eleventy configuration.
 */

const postListByYear = require("./postListByYear");
const postList = require("./postList");
const feedItems = require("./feedItems");

/**
 * Set up Eleventy configuration with imported shortcodes.
 * @module _includes/shortcodes
 * @param {Object} eleventyConfig - The Eleventy configuration object.
 * @see {@link https://www.11ty.dev/docs/config/ 11ty docs}
 */
module.exports = function (eleventyConfig) {
	eleventyConfig.addShortcode("postList", postList);
	eleventyConfig.addShortcode("postListByYear", postListByYear);
	eleventyConfig.addShortcode("feedItems", feedItems);
}