app.directive('magVisit', function () {
    return {
	templateUrl: '/templates/mag-visit.html',
	restrict: 'E',
	scope: {
	    visit: '='
	}
    };
});
