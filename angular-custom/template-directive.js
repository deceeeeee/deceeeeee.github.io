var app = angular.module('myApp', []);

app.directive('myPortfolio', function(){
    return {
        restrict: 'E',
        scope: {
            data: "="
        },
        templateUrl: '/angular-custom/template-portfolio.html'
    };
});