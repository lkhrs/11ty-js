/**
 * @file Layout for standalone pages.
 */

/**
 * Data and markup
 * @class Page
 */

class Page {
	data() {
		return {
			layout: "layouts/base.11ty.js",
		};
	}
	render(data) {
		return `<!-- _includes/layouts/page.11ty.js -->
			<main>
				<header>
					<h1>${data.title}</h1>
				</header>
				${data.content}
			</main> `;
	}
}

module.exports = Page;