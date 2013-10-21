$(document).ready(function() {

	$.get( "data/thisweek.json", function(data){
		$(this).summary(data);
	});

	$.fn.summary = function( data ) {

		gameData = data.games;

		$.each(gameData, function(i, item){
			url = gameData[i].url;
			$.get(url, function(teamData){
				$(".result").append("<li>"+teamData.teams[0].name+" "+teamData.teams[0].score+" - "+teamData.teams[1].score+" "+teamData.teams[1].name+"</li>")
			}, "json" );
		});
	};
});