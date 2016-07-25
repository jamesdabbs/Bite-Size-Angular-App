phoneApp.controller('RegisterController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    if (localStorage.getItem("user-token")) {
        $location.path("/");
    }

    $scope.user = { email: "", password: "", passwordConfirmation: "" };

    $scope.register = function() {
        $http({
            method: "POST",
            url:    "http://localhost:3000/api/me",
            data: {
                email:    $scope.user.email,
                password: $scope.user.password
            }
        }).then(function(response) {
            // TODO: store and respect expiration time??
            localStorage.setItem("user-token", response.data.token);
            $location.path("/");
        }, function() {
            alert("Something went wrong!"); // FIXME: be better
        })
    }

    $scope.logout = function() {
        localStorage.removeItem("user-token");
        $location.path("/sign_up");
    }
}])
