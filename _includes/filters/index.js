/**
 * @file Imports modules and sets up Eleventy configuration.
 */

 const filterTagList = require("./filterTagList");
 const getYears = require("./getYears");
 const escapeHtml = require("./escapeHtml");

/**
 * Set up Eleventy configuration with imported filters.
 * @module _includes/filters
 * @param {Object} eleventyConfig - The Eleventy configuration object.
 * @see {@link https://www.11ty.dev/docs/config/ 11ty docs}
 */
module.exports = function (eleventyConfig) {
	eleventyConfig.addFilter("filterTagList", filterTagList);
	eleventyConfig.addFilter("getYears", getYears);
	eleventyConfig.addFilter("escapeHtml", escapeHtml);
}