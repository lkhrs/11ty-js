/**
 * @file Defines the feedItems shortcode.
 * @module feedItems
 */

/**
 * Returns markup for an Atom feed for a given collection
 * @param {Object} items - Eleventy collection object
 * @param {Object} data - Eleventy data object
 * @param {Number} limit - Number of entries to include
 * @param {Boolean} email - Whether or not to show the Reply via Email link on entries
 * @return {String} - Atom feed markup
 */
module.exports = function (items, email, limit) {
	/**
	 * Limit the items object to the first n entries.
	 * @param {Object} items - Eleventy collection object
	 * @param {Number} limit - Number of entries to include
	 * @return {Object} - Limited Eleventy collection object
	 */
	let entries = items.slice(0, limit);

	/**
	 * Import metadata from _data/metadata.js
	 * @type {Object}
	 */
	const metadata = require("../../_data/metadata.js");

	/**
	 * Generate the entries markup.
	 * @return {String} - Atom feed markup
	 */
	return `
	${entries
		.map(
			(item) => `
	<entry>
		<title>${this.escapeHtml(item.data.title)}</title>
		<link href="${metadata.url}${item.url}" rel="alternate" type="text/html"/>
		<id>${metadata.url}${item.url}</id>
		<published>${item.data.page.date.toISOString()}</published>
		<updated>${
			item.data.updated
				? `${item.data.updated.toISOString()}`
				: `${item.data.page.date.toISOString()}`
		}</updated>
		${item.data.description ? `<summary>${item.data.description}</summary>` : ""}
		<content type="html">
			${this.escapeHtml(item.templateContent)}
			${this.escapeHtml(
				email
					? `<p><a href="mailto:${metadata.author.email}?subject=Re: ${item.data.title}">Reply via email</a></p>`
					: ""
			)}
		</content>
	</entry>`
		)
		.join("")}
`;
};
