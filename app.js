angular.module('weatherApp', ['ui.router']);


//*********************************************************************************************
	// creation of a customized filter to display temperature
	// Filters may have arguments. The syntax for this is
	// {{ expression | filter:argument1:argument2:... }}
	// E.g. the markup {{ 1234 | number:2 }} formats the number 1234 with 2 decimal points using the
angular.module('weatherApp').filter('tempSystem', function(){
		var outputTemp = "°C";
		return function(outputTemp,system){
			// by default will be set as temperature in °C
			//'system' will be the parameter to chose (c for Celcius and f for fahrenheit)
			//it will be set futher an action ( click from user on the fahrenheit link), default = c

			if (system == 'c'){outputTemp = ' °C'; }
			else if(system == 'f'){outputTemp = ' °F'; }
			return outputTemp;
		}
	});