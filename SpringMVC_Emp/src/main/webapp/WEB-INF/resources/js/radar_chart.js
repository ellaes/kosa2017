
		var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var music = ["재생빈도","BPM","Highest Pitch","Lowest Pitch","인기도"];
		var radarChart = null;
		var radarChartData = {
			labels : ["재생빈도","BPM","Highest Pitch","Lowest Pitch","인기도"],
			datasets: [
				{
					label: "My First dataset",
					fillColor: "rgba(178,235,244,0.5)",
					strokeColor: "rgba(103,153,255,1)",
					pointColor: "rgba(255,0,127,1)",
					pointStrokeColor: "rgba(255,178,217,1)",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				}
			]
		};

		$(function() {
			var ctx = document.getElementById("canvas").getContext("2d");
			radarChart = new Chart(ctx).Radar(radarChartData, {
				//Boolean - Whether to show lines for each scale point
				scaleShowLine : true,
				//Boolean - Whether we show the angle lines out of the radar
				angleShowLineOut : true,
				//Boolean - Whether to show labels on the scale
				scaleShowLabels : false,
				// Boolean - Whether the scale should begin at zero
				scaleBeginAtZero : true,
				//String - Colour of the angle line
				angleLineColor : "rgba(243,97,166,0.5)",
				//Number - Pixel width of the angle line
				angleLineWidth : 1,
				//String - Point label font declaration
				pointLabelFontFamily : "'Noto Sans KR'",
				//String - Point label font weight
				pointLabelFontStyle : "normal",
				//Number - Point label font size in pixels
				pointLabelFontSize : 15,
				//String - Point label font colour
				pointLabelFontColor : "#666",
				//Boolean - Whether to show a dot for each point
				pointDot : true,
				//Number - Radius of each point dot in pixels
				pointDotRadius : 3,
				//Number - Pixel width of point dot stroke
				pointDotStrokeWidth : 1,
				//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
				pointHitDetectionRadius : 20,
				//Boolean - Whether to show a stroke for datasets
				datasetStroke : true,
				//Number - Pixel width of dataset stroke
				datasetStrokeWidth : 2,
				//Boolean - Whether to fill the dataset with a colour
				datasetFill : false,
				onAnimationProgress: function() {
					console.log("onAnimationProgress");
				},
				onAnimationComplete: function() {
					console.log("onAnimationComplete");
				}
			});
		});

		$("canvas").on("click", function(e) {
			var activePoints = radarChart.getPointsAtEvent(e);
			console.log(activePoints);

			for(var i in activePoints) {
				console.log(activePoints[i].value);
			}
		});

