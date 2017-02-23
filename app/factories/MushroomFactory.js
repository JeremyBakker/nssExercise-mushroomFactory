"use strict";

app.factory('MushroomFactory', function ($q, $http) {

	let getMushrooms = (function () {
		return $q (function(resolve, reject) {
			$http.get('../../data.json')
			.then(function (mushroomObject) {
				resolve (mushroomObject);
			});
		});
	});

	return {getMushrooms};
});