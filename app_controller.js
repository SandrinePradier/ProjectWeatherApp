angular.module('weatherApp').controller('appController', function($scope, $timeout, $http){

	console.log("tout va bien");

	var system = "c";
	var latitude = "";
	var longitude = "";

	function getLocation(){
		//la fonction getLocation, native à javascript, permet de vérifier si le navigateur supporte la géoloclisation
		// et si oui, elle prend en parametre la fonction showPosition, qui prend en parametre "position" 
		// et retourne des propriétes de position, dont la longitude et la latitude
	if 		(!navigator.geolocation)
			{$scope.errorlocation = "Geolocation is not supported by this browser.";
			console.log('errorlocation');
			}

	else 	{navigator.geolocation.getCurrentPosition(showPosition);
					
				function showPosition(position) {
					//ici on récupère la position			
					$timeout(function() {
					//le timeout sert à rafraichir la vue, car angular ne la rafraichit pas automatiquement.
					// sinon notre latitude et longitude ne s'affichent pas.
					$scope.longitude = position.coords.longitude;
					$scope.latitude = position.coords.latitude;
					}, 0);
					latitude = position.coords.latitude;
					longitude = position.coords.longitude;
					console.log('this is the longitude: ',position.coords.longitude);
					console.log('this is the latitude: ',position.coords.latitude);
					console.log('this is the timestamp: ', position.timestamp);
				
				getCurrentLocation();
				};

			
				function getCurrentLocation(){
				//fonction pour obtenir la ville à partir de la longitude et latidude.
				// on utilise une api https://developer.mapquest.com/documentation/geocoding-api/address/get/
					$http.get('http://www.mapquestapi.com/geocoding/v1/reverse?key=oivuUIHum0iCT8A7wQjDs8nxgCnTlcGD&location=' + latitude + ',' + longitude)
					.then(function(response){
			      console.log( 'here is my response for the location details', response);
			      console.log('the current city :',response.data.results[0].locations[0].adminArea5);
			      $scope.city = response.data.results[0].locations[0].adminArea5;
			      });
				};
	
				


				function getWeatherAtLocation(){

				//fonction pour récupérer l'heure actuelle et la méteo actuelle pour une longitude et latitude données.
				//on apelle une api darksky, mais comme elle a des restrictions Anas nous fait d'abord passer
				// par un serveur. on lui communique la clé de la même façon que si on passait en direct avec l'API
				// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
				// on a aussi rentré un option de configuration à la fin pour afficher la météo au fomat adapté 
				// par rapport à la localisation units=auto
						
					$http.get('http://lit-ridge-46374.herokuapp.com/forecast/101377bbb6375ebe5eff42e16cb8a1cd/' + latitude +',' + longitude + '?units=auto')
					.then(function(response){

					console.log('here is my response for the weather details',response);
							
					//Current weather at location
					$scope.currentTime = new Date();
					$scope.icon = response.data.currently.icon;
					$scope.currentTemperature = response.data.currently.temperature;

					//Daily weather at location
					$scope.sentence = response.data.daily.summary;
					$scope.daily = response.data.daily.data[0];
					$scope.allDailyWeather = response.data.daily.data;

					//Hourly weather at location
					$scope.allHourlyWeather = response.data.hourly.data;
							
					//display temperature in °C or °F depending on the choice of user.
					// If the user click on link 'in Fahrenheit' the weather is displayed
					// with temperature in °F
					// the temperature is displayed by default on home page in °C
					//we have created a customed filter for this
					
					//ferme le http get
					});
				};
			
				getWeatherAtLocation();
			
			//ferme le else
			};
		//ferme getLocation
		};

		getLocation();


//ferme le controlleur
});