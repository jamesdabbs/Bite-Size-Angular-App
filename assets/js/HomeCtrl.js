phoneApp.controller('HomeController', ['$scope', '$http', '$location', function($scope, $http, $location){
    $scope.userToken = localStorage.getItem("user-token");

    if (!$scope.userToken) {
        $location.path("/sign_up");
    }

    $scope.domain = window.location.href;

    $http({
        method:  "GET",
        url:     "http://localhost:3000/api/me",
        headers: {
            "Authorization": $scope.userToken
        }
    }).then(function(response) {
        $scope.user = response.data;
    }, function() {
        alert("Something went wrong!");
    });
}]);
