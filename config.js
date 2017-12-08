angular.module('weatherApp', ['ui.router']).config(function ($stateProvider){
$stateProvider.state('currentWeather', {
          url: '/',
          templateUrl: 'components/weather/main_view.html'
        });
$stateProvider.state('nextHoursWeather', {
          url: '/nextHoursWeather',
          templateUrl: 'components/weather/nexthours_view.html'
        });
$stateProvider.state('nextDaysWeather', {
          url: '/nextDaysWeather',
          templateUrl: 'components/weather/nextdays_view.html'
        });
});