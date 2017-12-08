angular.module('weatherApp', ['ui.router']).config(function ($stateProvider){
$stateProvider.state('currentWeather', {
          url: '/',
          templateUrl: 'components/weather/main_view.html',
          controller: 'appController'
        });
$stateProvider.state('nextHoursWeather', {
          url: '/nextHoursWeather',
          templateUrl: 'components/weather/nexthours_view.html',
          controller: 'appController'
        });
$stateProvider.state('nextDaysWeather', {
          url: '/nextDaysWeather',
          templateUrl: 'components/weather/nextdays_view.html',
          controller: 'appController'
        });
});