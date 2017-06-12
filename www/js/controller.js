angular.module('ideabox')

    .controller('postIdeaController', function($scope, $http ,$ionicPopup , $state ) {

 var url =  ' https://ideabox-949c5.firebaseio.com/ideas.json' ;



        $scope.addIdea = function() {

            var name = $scope.name ;
            var firstname = $scope.firstname  ;
            var idea = $scope.idea      ;
            var email = $scope.email ;
            var service = $scope.service ;

            var postData = {
                "name" : name ,
                "firstname" : firstname ,
                "idea" : idea ,
                "email" : email ,
                "service ": service



            };

            $http.post(url, postData  ).success(function (data) {
                console.log('success');




            });
        };

        $scope.showAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Votre idée a été soumise avec succès',
                template: 'Merci de votre aide '
            });
            $state.go('welcome');
        }

    });
