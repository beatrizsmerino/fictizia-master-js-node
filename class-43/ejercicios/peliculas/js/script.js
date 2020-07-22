/**
 * @file script.js
 * @description Main file
 * @author Beatriz Sopeña Merino <beatrizsmerino@gmail.com>
 * @copyright (2020)
 */





/**
 * @requires apiMovies
 * @requires loader
 * @requires gradient
 */
import * as apiMovies from './modules/api-movies.js';
import * as loader from './modules/loader.js';
import * as gradient from './modules/gradient.js';





(function () {
	gradient.add("body");

	let searchInput = document.getElementById("searchInput");

	document.getElementById("searchButton").addEventListener("click", function (e) {
		e.preventDefault();

		let paginationGo = 1;
		loader.add();

		apiMovies.search(paginationGo).then(data => {
			setTimeout(function () {
				loader.remove();
				apiMovies.printSearchResults(data, paginationGo);
			}, 7000);
		});
	});

	searchInput.addEventListener("keyup", function (event) {
		if (event.keyCode === 13) {
			document.getElementById("searchButton").click();
		}
	});
})();