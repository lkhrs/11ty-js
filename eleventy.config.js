/**
 * @file Eleventy configuration file.
 * @see {@link https://www.11ty.dev/docs/config/ 11ty docs}
 */

const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const includes = require("./_includes/index.js");
const implicitFigures = require("markdown-it-image-figures");
const markdownItAnchor = require("markdown-it-anchor");
const markdownItFootnote = require("markdown-it-footnote");

/**
 * @param {import("@11ty/eleventy/src/UserConfig.js")} eleventyConfig - Eleventy configuration object
 */
module.exports = function (eleventyConfig) {
	// Add filters and shortcodes
	includes(eleventyConfig);

	/**
	 * Copy static files over to the build output directory
	 * @see {@link https://www.11ty.dev/docs/copy/ 11ty docs}
	 */
	eleventyConfig.addPassthroughCopy({
		"./static/": "/",
		"./node_modules/prismjs/themes/prism-okaidia.css": "/css/syntax.css",
		"./node_modules/simpledotcss/simple.min.css": "/css/simple.css",
		"content/**/*.{svg,webp,png,jpeg,jpg}": "",
	});

	/**
	 * Set dev server options
	 * @see {@link https://www.11ty.dev/docs/dev-server/ 11ty docs}
	 */
	eleventyConfig.setServerOptions({
		showAllHosts: true,
	});

	/**
	 * Emulate passthrough file copy during development
	 * @see {@link https://www.11ty.dev/docs/copy/#emulate-passthrough-copy-during-serve}
	 */
	eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

	/**
	 * Add build date to global data
	 * @see {@link https://www.11ty.dev/docs/data-global-custom/ 11ty docs}
	 * @see {@link https://www.raymondcamden.com/2021/11/02/eleventy-10-new-option-for-global-data Raymond Camden's post}
	 */
	eleventyConfig.addGlobalData("generated", () => {
		let now = new Date();
		return now.toISOString();
	});

	/**
	 * Add plugins to Eleventy
	 * @see {@link https://www.11ty.dev/docs/plugins/ 11ty docs}
	 */
	eleventyConfig.addPlugin(require("./eleventy.config.drafts.js"));
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 },
	});
	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

	/**
	 * Add layout aliases
	 * @see {@link https://www.11ty.dev/docs/layouts/#layout-aliasing 11ty docs}
	 */
	eleventyConfig.addLayoutAlias("base", "layouts/base.11ty.js");
	eleventyConfig.addLayoutAlias("page", "layouts/page.11ty.js");
	eleventyConfig.addLayoutAlias("post", "layouts/post.11ty.js");

	/**
	 * Disable extensionless layouts
	 * @see {@link https://www.11ty.dev/docs/layouts/#omitting-the-layouts-file-extension 11ty docs}
	 */
	eleventyConfig.setLayoutResolution(false);

	/**
	 * Add collections
	 * @see {@link https://www.11ty.dev/docs/collections/ 11ty docs}
	 */
	eleventyConfig.addCollection("blog", function (collectionApi) {
		return collectionApi
			.getFilteredByTag("blog")
			.sort((a, b) => b.date - a.date);
	});

	/**
	 * Customize Markdown rendering with markdown-it and markdown-it-anchor.
	 * @see {@link https://www.11ty.dev/docs/languages/markdown/#add-your-own-markdown-it-plugins 11ty docs}
	 */
	eleventyConfig.amendLibrary("md", (mdLib) => {
		mdLib.set({
			linkify: true,
			typographer: true,
		});
		mdLib.use(implicitFigures);
		mdLib.use(markdownItFootnote);
		mdLib.use(markdownItAnchor, {
			permalink: markdownItAnchor.permalink.headerLink({
				safariReaderFix: true,
				class: false,
			}),
			level: [1, 2, 3, 4],
			slugify: eleventyConfig.getFilter("slugify"),
		});
	});

	return {
		/**
		 * Set the template engine to use for Markdown files.
		 * @type {String}
		 * @see {@link https://www.11ty.dev/docs/config/#default-template-engine-for-markdown-files 11ty docs}
		 */
		markdownTemplateEngine: false,

		/**
		 * Set the content directory.
		 * @type {Object}
		 * @see {@link https://www.11ty.dev/docs/config/#input-directory 11ty docs}
		 */
		dir: {
			input: "content",
			includes: "../_includes",
			data: "../_data",
		},

		/**
		 * Set path prefix for absolute URLs in the HTML output.
		 * @type {String}
		 * @see {@link https://www.11ty.dev/docs/config/#deploy-to-a-subdirectory-with-a-path-prefix 11ty docs}
		 */
		pathPrefix: "/",
	};
};
