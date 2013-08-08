


MLBView = Backbone.View.extend({
	
	el: '#weatherOutput',
	
	events: {
	    'change #bballCitySelector':   'getWeather',
	    	
	},

	getWeather: function() {

	var myurl = 'http://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20location=' + document.getElementById('bballCitySelector').value + '&format=json'

		$.ajax({url:myurl,success:function(result){

			$('#mytemp').text(result.query.results.channel.item.condition.temp);
			$('#mytext').text(result.query.results.channel.item.condition.text);
			$('#mylat').text(result.query.results.channel.item.lat);
			$('#mylong').text(result.query.results.channel.item.long);
			
		}});


	
    },


});

$(function() {

new MLBView({el: 'body'});

});




