app.directive('magVisit', function () {
    return {
	templateUrl: '/templates/mag-visit.html',
	restrict: 'E',
	scope: {
	    visit: '='
	}
    };
});

app.directive('magVisitMap', function () {
    return {
	restrict: 'E',
	scope: {
	    visit: '='
	},
	link: function (scope, element, attrs) {
	    element.css({
		width: '300px',
		height: '200px',
		display: 'block'
	    });

	    var map = L.map(element[0], {
		center: [scope.visit.lat, scope.visit.long],
		zoom: 12
	    });

	    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	    }).addTo(map);
	}
    };
});
