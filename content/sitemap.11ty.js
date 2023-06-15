/**
 * @file Defines the sitemap template.
 */

exports.data = {
	title: "Sitemap",
	eleventyExcludeFromCollections: true,
	permalink: "/sitemap.xml",
};

/**
 * Markup for the sitemap.
 * @param {Object} data - 11ty data object
 * @returns {String} - XML markup for the sitemap
 */
exports.render = function (data) {
	return `<?xml version="1.0" encoding="UTF-8"?>
		<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"  xmlns:xhtml="http://www.w3.org/1999/xhtml">
			${data.collections.all
				.sort((a, b) => b.date - a.date)
				.map((item) => {
					return `
				<url>
					<loc>${data.metadata.url + item.url}</loc>
					<lastmod>${
						item.data.updated
							? `${item.data.updated.toISOString()}`
							: `${item.data.page.date.toISOString()}`
					}</lastmod>
				</url>`;
				})
				.join("")}
		</urlset>`;
};
