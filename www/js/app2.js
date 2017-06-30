'Use Strict';
angular.module('ideabox', ['ionic', 'ngStorage' ,'firebase'])
  //Constants for the Popup messages
  //For the icons, refer to http://ionicons.com for all icons.
  //Here you can edit the success and error messages on the popups.
  .constant('Popup', {
    delay: 3000, //How long the popup message should show before disappearing (in milliseconds -> 3000 = 3 seconds).
    successIcon: "ion-happy-outline",
    errorIcon: "ion-sad-outline",
    accountCreateSuccess: "Congratulations! Your account has been created. Logging you in.",
    emailAlreadyExists: "Sorry, but an account with that email address already exists. Please register with a different email and try again.",
    accountAlreadyExists: "Sorry, but an account with the same credential already exists. Please check your account and try again.",
    emailNotFound: "Sorry, but we couldn\'t find an account with that email address. Please check your email and try again.",
    userNotFound: "Sorry, but we couldn\'t find a user with that account. Please check your account and try again.",
    invalidEmail: "Sorry, but you entered an invalid email. Please check your email and try again.",
    notAllowed: "Sorry, but registration is currently disabled. Please contact support and try again.",
    serviceDisabled: "Sorry, but logging in with this service is current disabled. Please contact support and try again.",
    wrongPassword: "Sorry, but the password you entered is incorrect. Please check your password and try again.",
    accountDisabled: "Sorry, but your account has been disabled. Please contact support and try again.",
    weakPassword: "Sorry, but you entered a weak password. Please enter a stronger password and try again.",
    errorRegister: "Sorry, but we encountered an error registering your account. Please try again later.",
    passwordReset: "A password reset link has been sent to: ",
    errorPasswordReset: "Sorry, but we encountered an error sending your password reset email. Please try again later.",
    errorLogout: "Sorry, but we encountered an error logging you out. Please try again later.",
    sessionExpired: "Sorry, but the login session has expired. Please try logging in again.",
    errorLogin: "Sorry, but we encountered an error logging you in. Please try again later.",
    welcomeBack: "Welcome back! It seems like you should still be logged in. Logging you in now.",
    manyRequests: "Sorry, but we\'re still proccessing your previous login. Please try again later.",
    fullVersionOnly: "Sorry, but this feature is not available on the Lite version. Upgrade to Full version in order to use Social Login."
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login/login.html',
        controller: 'loginController'
      })
      .state('forgotPassword', {
        url: '/forgotPassword',
        templateUrl: 'views/forgotPassword/forgotPassword.html',
        controller: 'forgotPasswordController'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register/register.html',
        controller: 'registerController'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home/home.html',
        controller: 'homeController'
      })
        .state('shopping', {
            url: '/shopping',
            controller:'ShoppingCtrl',

            templateUrl: 'views/shopping.html'

        });

      $stateProvider.state('queue',{
          url:'/queue',
          templateUrl:'views/queue.html'
      });

      $stateProvider.state('edit',{
          url:'/edit/:personId',
          controller:'EditController',
          templateUrl:'views/edit.html'
      });

      $stateProvider.state('add',{
          url:'/add',
          controller:'AddController',
          templateUrl:'views/edit.html'
      });
    $urlRouterProvider.otherwise("/login");
  })




.controller('QueueController', function($scope,Queue,$state){
    $scope.queue = Queue;
    /*
     $scope.queue.$loaded(function(){
     if($scope.queue.length === 0){
     $scope.queue.$add({
     name:'David Cai',
     status:'Added to queue',
     updatedTime:Firebase.ServerValue.TIMESTAMP
     });
     $scope.queue.$add({
     name:'Denis Koletić',
     status:'Added to queue',
     updatedTime:Firebase.ServerValue.TIMESTAMP
     });
     }
     });
     */

    $scope.add = function(){
        $state.go('add');
    };

    $scope.delete = function(person){
        //queueService.deletePerson(personId);
        Queue.$remove(person);
    };

    var persons = [] ;


    $scope.deleteAll = function() {
        var ref = new Firebase('https://rich-project-c900f.firebaseio.com/');

        ref.remove() ;
        console.log('lama')


    };
})

    .controller('EditController', function($scope,$state,Queue){
        var ref = new Firebase("https://rich-project-c900f.firebaseio.com");



        var person = Queue.$getRecord($state.params.personId);
        //$scope.person = angular.copy(queueService.getPerson($state.params.personId));
        $scope.person = angular.copy(person);


        //console.log($scope.person);
        $scope.save = function(){
            //  queueService.updatePerson($scope.person);
            //$state.go('queue');
            person.name = $scope.person.name;
            person.quantity = $scope.person.quantity;
            person.avis2 = $scope.person.avis2 ;
            person.avis3 = $scope.person.avis3 ;
            person.type = $scope.person.type ;
            person.updatedTime = Firebase.ServerValue.TIMESTAMP;
            Queue.$save(person);
            $state.go('queue');
        };

        $scope.delete = function(){
            //  queueService.deletePerson($scope.person.id);
            //$state.go('queue');
            Queue.$remove(person);
            $state.go('queue');

        };


    })

    .controller('AddController', function($scope,$state,Queue){
        $scope.person = {
            name:'',
            quantity:'',
            avis2:'',
            avis3:'',
            type: 'project'
        };
        $scope.save = function(){
//  queueService.addPerson($scope.person);
            //$state.go('queue');
            $scope.person.updatedTime = Firebase.ServerValue.TIMESTAMP;
            Queue.$add($scope.person);
            $state.go('queue');
        }

    });


