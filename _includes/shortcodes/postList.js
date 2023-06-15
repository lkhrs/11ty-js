/**
 * @file Defines the post list shortcode.
 */

/**
 * Returns a list of posts
 * @module _includes/shortcodes/postList
 * @param {Array} posts - The array of posts.
 * @returns {String} The markup for the post list.
 */
module.exports = function (posts) {
	return `
	<ul class="big-words">
		${posts
			.map((post) => `<li><a href="${post.url}">${post.data.title}</a></li>`)
			.join("")}
	</ul>`;
};
