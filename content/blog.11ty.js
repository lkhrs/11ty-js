/**
 * @file Defines the blog page template
 */

exports.data = {
	title: "Blog",
	layout: "base",
	pagination: {
		data: "collections.blog",
		size: 20,
	},
	// permalink that iterates based on pageNumber
	permalink: (data) => {
		if (data.pagination.pageNumber === 0) {
			return "/blog/";
		} else {
			return `/blog/page/${data.pagination.pageNumber}/`;
		}
	},
};

exports.render = function (data) {
	return `<!-- content/blog.11ty.js -->
		<main>
			<h1>${data.title}</h1>
			${this.postList(data.pagination.items)}
			<nav aria-labelledby="my-pagination">
				<h2 id="pagination">Pagination</h2>
				<ol>
					<li>
						${
							data.page.url === data.pagination.href.first
								? `First`
								: `<a href="${data.pagination.href.first}">First</a>`
						}
					</li>
					<li>
						${
							data.pagination.href.previous
								? `<a href="${data.pagination.href.previous}">Previous</a>`
								: `Previous`
						}
					</li>
					${data.pagination.pages
						.map(function (item, index) {
							return `<li>
								<a
									href="${data.pagination.hrefs[index]}"
									${data.pagination.hrefs[index] ? 'aria-current="page"' : ""}
									>Page ${index + 1}</a
								>
							</li>`;
						})
						.join("")}
					<li>
						${
							data.pagination.href.next
								? `<a href="${data.pagination.href.next}">Next</a>`
								: `Next`
						}
					</li>
					<li>
						${
							data.page.url === data.pagination.href.last
								? `Last`
								: `<a href="${data.pagination.href.last}">Last</a>`
						}
					</li>
				</ol>
			</nav>
		</main> `;
};
