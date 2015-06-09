"use strict";

angular.module("psMenu").directive("psMenuGroup",function(){
   return{
        require:"^psMenu",
        transclude:true,
        scope:{
            label: '@',
            icon: '@'
        },
        templateUrl:"extModules/psMenu/psMenuGroupTemplate.html",
        link:function(scope,el,attr,ctrl){
            scope.isOpen=false;
            scope.closeMenu=function(){
                scope.isOpen=false;
            };
            	
            scope.clicked=function(){
              scope.isOpen=!scope.isOpen;  
            };
            
            scope.isVertical=function(){
			   return ctrl.isVertical();	
			}
        }
        
        
   };
    
});