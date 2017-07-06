    //--------------MENU MOUSEOUT EVENT-------------------
    
    var more = document.querySelector("#more");
    var menubox = document.querySelector("#menuDiv");
    var chartbox = document.querySelector("#chartbox");
    var menulists = document.querySelectorAll(".menu");
    
    more.addEventListener("mouseover", function(){
    	menubox.style.display="block";   
    });

		//모든 자식 element 도 무관하게 이벤트 적용하기
		menubox.addEventListener("mouseleave",function(){
			this.style.display="none";
		})

var myConfig = {
		      backgroundColor: "#fff",
		      globals: {
		        shadow: false,
		        fontFamily: "Helvetica"
		      },
		      type: "area",
		      title: {
		        text: "Bandwidth for All Sites",
		        fontColor: "#5f5f5f",
		        backgroundColor: "transparent",
		        textAlign: "left",
		        padding: "15px 15px",
		        fontSize: "20px"
		      },
		      legend: {
		        layout: 'float',
		        backgroundColor: "transparent",
		        borderColor: "transparent",
		        marginTop: 30,
		        marker: {
		          borderRadius: "50px",
		          borderColor: "transparent"
		        },
		        item: {
		          fontColor: "#5f5f5f"
		        }

		      },
		      scaleX: {
		        maxItems: 8,
		        transform: {
		          type: 'date'
		        },
		        zooming: true,
		        values: [1442905200000, 1442908800000, 1442912400000, 1442916000000, 1442919600000, 1442923200000, 1442926800000, 1442930400000, 1442934000000, 1442937600000, 1442941200000, 1442944800000, 1442948400000],
		        lineColor: "#5f5f5f",
		        lineWidth: "1px",
		        tick: {
		          lineColor: "#5f5f5f",
		          lineWidth: "1px"
		        },
		        item: {
		          fontColor: "#5f5f5f"
		        },
		        guide: {
		          visible: false
		        }
		      },
		      scaleY: {
		        lineColor: "#5f5f5f",
		        lineWidth: "1px",
		        tick: {
		          lineColor: "#5f5f5f",
		          lineWidth: "1px"
		        },
		        guide: {
		          lineStyle: "solid",
		          lineColor: "#626262"
		        },
		        item: {
		          fontColor: "#5f5f5f"
		        },
		      },
		      tooltip: {
		        visible: false
		      },
		      crosshairX: {
		        scaleLabel: {
		          backgroundColor: "#fff",
		          fontColor: "black",
		          borderColor: "#333",
		          borderWidth: 1,
		          borderRadius: 3
		        },
		        plotLabel: {
		          backgroundColor: "#434343",
		          fontColor: "#FFF"
		        }
		      },
		      plot: {
		        "contour-on-top": false,
		        alphaArea: 1,
		        lineWidth: "2px",
		        aspect: "spline",
		        marker: {
		          visible: false
		        },
		        animation: {
		          delay: 500,
		          effect: "ANIMATION_SLIDE_TOP",
		          speed: 700,
		          method: 0,
		          sequence: 1
		        }
		      },
		      series: [{
		          text: "All Sites",
		          values: [2596, 2626, 4480, 6394, 7488, 14510, 7012, 3389, 20281, 48597, 53309, 52385, 47097, 50813, 13510],
		          backgroundColor1: "#E84F28",
		          backgroundColor2: "#E84F28",
		          lineColor: "#E84F28"
		        }, {
		          text: "www.zingchart.com",
		          values: [479, 199, 583, 1624, 2772, 7899, 3467, 2227, 12885, 27873, 34420, 32569, 27721, 31569, 7362],
		          backgroundColor1: "#45C392",
		          backgroundColor2: "#45C392",
		          lineColor: "#45C392"
		        },

		        {
		          text: "blog.zingchart.com",
		          values: [408, 343, 410, 840, 1614, 3274, 2092, 914, 5709, 15317, 15633, 16720, 15504, 15821, 4565],
		          backgroundColor1: "#28C2D1",
		          backgroundColor2: "#28C2D1",
		          lineColor: "#28C2D1"
		        }, {
		          text: "help.zingchart.com",
		          values: [989, 1364, 2161, 2644, 1754, 2015, 818, 77, 1260, 3912, 1671, 1836, 2589, 1706, 1161],
		          backgroundColor1: "#FBA645",
		          backgroundColor2: "#FBA645",
		          lineColor: "#FBA645"
		        },
		      ]
		    };

		    zingchart.render({
		      id: 'myChart',
		      data: myConfig,
		      height: '100%',
		      width: '100%',
		    });	


