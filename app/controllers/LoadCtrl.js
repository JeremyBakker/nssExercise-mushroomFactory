"use strict";

app.controller("LoadCtrl", function($scope, MushroomFactory){

	MushroomFactory.getMushrooms().then((mushroomObject)=> {
		    let mushroomArray = [];

		    for (var i in mushroomObject.data.mushrooms) {
		    	let newObject = {};
		    	newObject.name = Object.keys(mushroomObject.data.mushrooms[i]);
		    	newObject.description = mushroomObject.data.mushrooms[i][newObject.name].description;
		    	newObject.edible = mushroomObject.data.mushrooms[i][newObject.name].edible;
		    	mushroomArray.push(newObject);
		    }

		$scope.mushrooms = mushroomArray;
    });

});
	  



