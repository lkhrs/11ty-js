/**
 * @file Defines the template for the tag pages
 */

/**
 * Frontmatter
 */
exports.data = {
	layout: "layouts/base.11ty.js",
	pagination: {
		data: "collections",
		size: 1,
		alias: "tag",
		filter: ["blog"],
	},
	eleventyComputed: {
		title: (data) => `Tag: "${data.tag}"`,
	},
	permalink: (data) => `/tags/${data.tag}/`,
};

/**
 * Markup listing items filed under a tag and categorized by year
 * @param {Object} data - 11ty data object
 * @returns {String} - HTML markup listing items with the tag
 */
exports.render = function (data) {
	return `<!-- content/tags.11ty.js -->
		<main>
		<h1>Items tagged with "${data.tag}"</h1>
		${this.postListByYear(
			data.collections[data.tag].sort((a, b) => b.date - a.date)
		)}
		</main>`;
};
