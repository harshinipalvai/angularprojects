(function () {
	'use strict';

	angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject =['$scope'];

	function LunchCheckController ($scope){
		$scope.list = '';
		$scope.msg = '';

		$scope.checkItems = function () {
			if($scope.list !== '') {
				var listofitems = $scope.list.split(',');
				var count =0;
				for(var i =0; i<listofitems.length; i++){
					if(listofitems[i].trim() !=='')
						count++;
				}
				if(count > 0){
					if(count <=3){
						$scope.msg = 'Enjoy!';
					}
					else if(count > 3){
						$scope.msg = 'Too much!'
					}
				}
				else {
					NoItemslisted();
				}
			}
			else {
				NoItemslisted();
			}
		}
		var NoItemslisted = function() {
			$scope.msg = 'Please enter data first';
		};
	}
})();
