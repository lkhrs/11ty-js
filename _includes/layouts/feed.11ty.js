/**
 * @file Defines the template for the RSS feed.
 */

/**
 * Returns markup for an Atom feed for a given collection.
 * @param {Object} data - Eleventy data object
 * @param {Object} collection - Eleventy collection object
 * @returns {String} - Atom feed markup
 */
exports.render = function (data) {
	return `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="${data.metadata.language}">
	<title>${data.title} — ${data.metadata.title}</title>
	<subtitle>Recent content from the ${data.title} section on ${data.metadata.title}</subtitle>
	<updated>${data.generated}</updated>
	<id>${data.metadata.url}/</id>
	<link href="${data.metadata.url}${data.page.url}" rel="self" type="application/atom+xml"/>
	<link href="${data.metadata.url}/" rel="alternate" type="text/html"/>
	<generator uri="https://www.11ty.dev/" version="${data.eleventy.version}">Eleventy</generator>
	<rights>© ${new Date().getFullYear()} ${data.metadata.author.name}</rights>
	<author>
		<name>${data.metadata.author.name}</name>
		<email>${data.metadata.author.email}</email>
	</author>
	${data.content}
</feed>`;
};
