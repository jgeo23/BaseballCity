$(function() {


	



MLBView = Backbone.View.extend({

	events: {
	    'change #bballCitySelector':   'getWeather',
	    	
	},

	getWeather: function() {

	var myurl = 'http://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20location=' + document.getElementById('bballCitySelector').value + '&format=json'
	//var myurl = "http://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20location=02201&format=json"
	//var myurl = "http://query.yahooapis.com/v1/public/yql?q=select item.condition from weather.forecast where location=02201&format=json"

	var obj1;

//alert(window.abc)

//$(abc).load(myurl);

//$.ajax({url:myurl,success:function(result){alert(result.query.results.channel.item.condition.temp);}});
$.ajax({url:myurl,success:function(result){

//var obj1 = $.parseJSON(result);
var obj1 = result;
document.getElementById('mydiv2').innerHTML=obj1.query.results.channel.item.condition.text;
document.getElementById('mydiv1').innerHTML=obj1.query.results.channel.item.condition.temp;
//$("#mydiv2").innerHTML=obj1.query.results.channel.item.condition.text;

}});

//alert(window.abc.query.results.channel.item.condition.temp)
	
	//	document.getElementById('mydiv2').innerHTML=myurl;
	
    },


});

var myview = new MLBView({el: 'body'});

});




