"use strict";

angular.module('psMenu').directive('psMenu',function(){
	return{
		scope:{

		},
		transclude:true,
		controller:'psMenuController',
		templateUrl:'extModules/psMenu/psMenuTemplate.html',
		link:function  (scope,el,attr) 
		{
			// body...
		}

	};

});