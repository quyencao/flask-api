var app = angular.module('app', ['ui.bootstrap', 'ngRoute'])

app.config(function ($routeProvider) {
   $routeProvider.when('/accounts', {
       controller: 'accountInqueryController',
       templateUrl: '/static/js/app/partials/accountInquery.html'
   }).otherwise('/accounts')
});
