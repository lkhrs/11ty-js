/**
 * @file Defines the post list shortcode.
 */

/**
 * Returns a list of posts categorized by year
 * @module _includes/shortcodes/postList
 * @param {Array} posts - The array of posts.
 * @returns {String} The markup for the post list.
 */
module.exports = function (posts) {
	const years = [...new Set(posts.map((post) => post.date.getFullYear()))];

	return `
		${years
			.map(
				(year) => `
				<h2 id="${year}" class="year">${year}</h2>
						<ul class="big-words">
							${posts
								.filter((post) => post.date.getFullYear() === year)
								.map(
									(post) => `
										<li>
											<a href="${post.url}">${post.data.title}</a>
										</li>
									`
								)
								.join("")}
						</ul>
					`
			)
			.join("")}
	`;
};
