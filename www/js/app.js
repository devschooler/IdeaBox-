// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('ideabox', ['ionic' , 'ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

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
          .state('welcome', {
            url: '/welcome',
            templateUrl: 'views/welcome.html'

          })

          .state('postIdea', {
            url: '/postIdea',
            templateUrl: 'viewss/idea.html',
            controller: 'postIdeaController'
          })
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
            });
      $urlRouterProvider.otherwise("/welcome");
    });
