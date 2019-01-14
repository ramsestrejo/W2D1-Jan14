var request = require( "request");

var city = process.argv[ 2 ];

request( "https://www.metaweather.com/api/location/search/?query=" + city , function ( error, response , body ) {

	if ( response.statusCode === 200 ) { 
		var data = JSON.parse( body );
		console.log( data ); 
		var weatherId = data[ 0 ][ 'woeid'];

		request( "https://www.metaweather.com/api/location/" + weatherId , function ( error, response , body ) {
			var tempData = JSON.parse( body );
			var temperature = tempData.consolidated_weather[ 0 ]['the_temp'];
			console.log( "temperature in " , city , ' is ' , temperature);
		});
	}
	
}
);
