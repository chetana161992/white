"use strict";

angular.module("psFramework").directive("psFramework",function(){
		return{
			transclude: true,
			scope:{
				title:"@",
				subtitle:"@",
				iconFile:"@"

			},
			controller:"psFrameworkController",
			templateUrl:"extModules/psFramework/psFrameworkTemplate.html"


		};
});