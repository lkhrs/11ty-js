/**
 * @file Layout for posts
 */

/**
 * Data and markup
 */

exports.data = {
	layout: "layouts/base.11ty.js",
};

exports.render = function (data) {
	return `<!-- _includes/layouts/post.11ty.js -->
		<article>
			<header>
				<h1>${data.title}</h1>
				<p>
					<time datetime="${data.page.date.toISOString()}">
						${data.page.date.toISOString().split("T")[0]}
					</time>
				</p>
				${data.description ? `<p>${data.description}</p>` : ""}
			</header>
			${data.content}
			<footer>
				<div>
					<p>Tags</p>
					<ul>
						${data.tags
							.filter((tag) => tag !== "blog")
							.map((tag) => `<li><a href="/tags/${tag}/">#${tag}</a></li>`)
							.join(" ")}
					</ul>
				</div>
				<p>
					<a class="button" href="mailto:${data.metadata.author.email}?subject=Re: ${
		data.title
	}">Reply via email</a>
				</p>
			</footer>
		</article> `;
};
