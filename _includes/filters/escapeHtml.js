/**
 * @file Helper to escape HTMl entities for use in XML files.
 */

/**
 * Escape HTML entities in a string.
 * @param {String} str - The string to escape.
 * @return {String} - The escaped string.
 * @see {@link https://stackoverflow.com/a/6234804/11985346 Stack Overflow}
 */
function escapeHtml(str) {
	let chars = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#039;",
	};
	let keys = Object.keys(chars);
	let regex = new RegExp(`[${keys.join("")}]`, "g");

	return str.replaceAll(regex, (char) => chars[char]);
}

module.exports = escapeHtml;