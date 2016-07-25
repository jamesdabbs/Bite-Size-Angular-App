phoneApp.controller('RegisterController', ['$scope', '$http', '$location', 'User', function($scope, $http, $location, User) {
    if (User.isLoggedIn()) {
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
            User.logIn(response.data.token);
        }, function() {
            alert("Something went wrong!"); // FIXME: be better
        })
    }

    $scope.logout = function() {
        User.logOut()
    }
}])
