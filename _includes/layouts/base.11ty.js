/**
 * @file Base layout for all pages
 */

/**
 * Defines the HTML for the base layout, which is used by all other templates.
 * @function
 * @param {Object} data - The `data` object passed to the template by Eleventy.
 * @returns {string} The HTML for the base layout.
 * @see {@link https://www.11ty.dev/docs/layouts/ 11ty docs}
 */
module.exports = function render(data) {
	return `<!-- _includes/layouts/base.11ty.js -->
		<!DOCTYPE html>
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="color-scheme" content="dark light" />
				<meta name="generator" content="${data.eleventy.generator}" />
				<title>
					${data.title
						? `${data.title} — ${data.metadata.title}`
						: `${data.metadata.title}`}
				</title>
				<link rel="stylesheet" href="/css/simple.css" />
				<link rel="stylesheet" href="/css/syntax.css" />
				<link rel="canonical" href="${data.metadata.url + data.page.url}" />
			</head>
			<body>
				<header>
					<h1><a href="/">${data.metadata.title}</a></h1>
					<nav>
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/blog/">Blog</a></li>
							<li><a href="/blog/index.xml">RSS</a></li>
						</ul>
					</nav>
				</header>
				${data.content}
				<footer>
					<p>© ${new Date().getFullYear()} ${data.metadata.author.name}</p>
				</footer>
			</body>
		</html> `;
};
