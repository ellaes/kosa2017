//===============YOLO PROJECT===================================


//===================================장르버튼 클릭==================================
$("#btn_genre").click(function(){
	var chart = $("div>#main");
	chart.attr("id","main4");
	console.log(chart)
	
	// configure for module loader
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });
    // use
    require(
        [
         // require the specific chart type
            'echarts',
            'echarts/chart/pie',
            'echarts/chart/funnel'
        ],
        function (ec) {
            // Initialize after dom ready
        	var myChart = ec.init(document.getElementById('main4')); 
        	
        	var option =  {
        		    title : {
        		        text: '장르별 흥행도 파이차트 ',
        		        subtext: '2012~2014년도 기준',
        		        x:'center'
        		    },
        		    tooltip : {
        		        trigger: 'item',
        		        formatter: "{a} <br/>{b} : {c} ({d}%)"
        		    },
        		    legend: {
        		        x : 'center',
        		        y : 'bottom',
        		        data:['댄스','R&B','OST','OST','발라드','랩/힙합','록/메탈','인디음악']
        		    },
        		    toolbox: {
        		        show : true,
        		        feature : {
        		            dataView : {show: true, readOnly: false},
        		            magicType : {
        		                show: true, 
        		                type: ['pie', 'funnel']
        		            },
        		            saveAsImage : {show: true}
        		        }
        		    },
        		    calculable : true,
        		    series : [
        		        {
        		            name:'파이차트1',
        		            type:'pie',
        		            radius : [20, 110],
        		            center : ['25%', 200],
        		            roseType : 'radius',
        		            width: '40%',       // for funnel
        		            max: 40,            // for funnel
        		            itemStyle : {
        		                normal : {
        		                    label : {
        		                        show : false
        		                    },
        		                    labelLine : {
        		                        show : false
        		                    }
        		                },
        		                emphasis : {
        		                    label : {
        		                        show : true
        		                    },
        		                    labelLine : {
        		                        show : true
        		                    }
        		                }
        		            },
        		            data:[
          		                {value:10, name:'댄스'},
        		                {value:5, name:'R&B'},
        		                {value:15, name:'OST'},
        		                {value:25, name:'발라드'},
        		                {value:20, name:'트로트'},
        		                {value:35, name:'랩/힙합'},
        		                {value:30, name:'록/메탈'},
        		                {value:40, name:'인디음악'}
        		            ]
        		        },
        		        {
        		            name:'파이차트2',
        		            type:'pie',
        		            radius : [30, 110],
        		            center : ['75%', 200],
        		            roseType : 'area',
        		            x: '50%',               // for funnel
        		            max: 40,                // for funnel
        		            sort : 'ascending',     // for funnel
        		            data:[
          		                {value:10, name:'댄스'},
        		                {value:5, name:'R&B'},
        		                {value:15, name:'OST'},
        		                {value:25, name:'발라드'},
        		                {value:20, name:'트로트'},
        		                {value:35, name:'랩/힙합'},
        		                {value:30, name:'록/메탈'},
        		                {value:40, name:'인디음악'}
        		            ]
        		        }
        		    ]
        		};
// Load data into the ECharts instance 
myChart.setOption(option); 
}); //require 끝
    $("#graph1-detail").css("display","block");
    $("#graph2-detail").css("display","none");
    
});

//시대별 차트 #===========
$("#btn_time").click(function(){
	var chart = $("div>#main4");
	chart.attr("id","main");
	// configure for module loader
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });
    // use
    require(
        [
            'echarts',
            'echarts/chart/bar',
            'echarts/chart/line' // require the specific chart type
        ],
        function (ec) {
            // Initialize after dom ready
        	var myChart = ec.init(document.getElementById('main')); 
        	
			var option = {
			    title : {
			        text: '2017년 상반기'
			    },
			    tooltip : {
			        trigger: 'axis',
			        formatter: function (params) {
			            var res = params[0].name;
			            for (var i = params.length - 1; i >= 0; i--) {
			                if (params[i].value instanceof Array) {
			                    res += '<br/>' + params[i].seriesName;
			                    res += '<br/>  개장가 : ' + params[i].value[0] + '  최고: ' + params[i].value[3];
			                    res += '<br/>  종가: ' + params[i].value[1] + '  최저: ' + params[i].value[2];
			                }
			                else {
			                    res += '<br/>' + params[i].seriesName;
			                    res += ' : ' + params[i].value;
			                }
			            }
			            return res;
			        }
			    },
			    legend: {
			        data:['BPM','Pitch']
			    },
			    toolbox: {
			        show : true,
			        feature : {
			            dataZoom : {show: true},
			            magicType: {show: true, type: ['line', 'bar']},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    dataZoom : {
			        show : true,
			        realtime: true,
			        start : 50,
			        end : 100
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : true,
			            axisTick: {onGap:false},
			            splitLine: {show:false},
			            data : [
			                "2013/1/24", "2013/1/25", "2013/1/28", "2013/1/29", "2013/1/30",
			                "2013/1/31", "2013/2/1", "2013/2/4", "2013/2/5", "2013/2/6", 
			                "2013/2/7", "2013/2/8", "2013/2/18", "2013/2/19", "2013/2/20", 
			                "2013/2/21", "2013/2/22", "2013/2/25", "2013/2/26", "2013/2/27", 
			                "2013/2/28", "2013/3/1", "2013/3/4", "2013/3/5", "2013/3/6", 
			                "2013/3/7", "2013/3/8", "2013/3/11", "2013/3/12", "2013/3/13", 
			                "2013/3/14", "2013/3/15", "2013/3/18", "2013/3/19", "2013/3/20", 
			                "2013/3/21", "2013/3/22", "2013/3/25", "2013/3/26", "2013/3/27", 
			                "2013/3/28", "2013/3/29", "2013/4/1", "2013/4/2", "2013/4/3", 
			                "2013/4/8", "2013/4/9", "2013/4/10", "2013/4/11", "2013/4/12", 
			                "2013/4/15", "2013/4/16", "2013/4/17", "2013/4/18", "2013/4/19", 
			                "2013/4/22", "2013/4/23", "2013/4/24", "2013/4/25", "2013/4/26", 
			                "2013/5/2", "2013/5/3", "2013/5/6", "2013/5/7", "2013/5/8", 
			                "2013/5/9", "2013/5/10", "2013/5/13", "2013/5/14", "2013/5/15", 
			                "2013/5/16", "2013/5/17", "2013/5/20", "2013/5/21", "2013/5/22", 
			                "2013/5/23", "2013/5/24", "2013/5/27", "2013/5/28", "2013/5/29", 
			                "2013/5/30", "2013/5/31", "2013/6/3", "2013/6/4", "2013/6/5", 
			                "2013/6/6", "2013/6/7", "2013/6/13"
			            ]
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            scale:true,
			            splitNumber: 5,
			            boundaryGap: [0.01, 0.01]
			        },
			        {
			            type : 'value',
			            scale:true,
			            splitNumber: 5,
			            boundaryGap: [0.05, 0.05],
			            axisLabel: {
			                formatter: function (v) {
			                    return Math.round(v) 
			                }
			            }
			        }
			    ],
			    series : [
			        {
			            name:'BPM',
			            type:'line',
			            yAxisIndex: 1,
			            symbol: 'none',
			            data:[
			            	113,68,116,127,137,162,176,90,119,149,198,63,168,155,158,117,81,116,159,79,173,162,179,153,163,71,69,91,114,72,185,73,107,147,133,92,106,167,96,103,158,79,87,67,176,66,82,164,95,166,145,69,197,147,188,60,99,135,150,135,93,148,118,198,80,143,115,162,61,123,73,114,107,64,161,77,78,156,80,90,155,113,91,92,133,86,103,125,97,85
			            ],
			            markPoint : {
			                symbol: 'emptyPin',
			                itemStyle : {
			                    normal : {
			                        color:'#1e90ff',
			                        label : {
			                            show:true,
			                            position:'top',
			                            formatter: function (param) {
			                                return Math.round(param.value) 
			                            }
			                        }
			                    }
			                },
			                data : [
			                    {type : 'max', name: '최고가', symbolSize:5},
			                    {type : 'min', name: '최저가', symbolSize:5}
			                ]
			            },
			            markLine : {
			                symbol : 'none',
			                itemStyle : {
			                    normal : {
			                        color:'#1e90ff',
			                        label : {
			                            show:true,
			                            formatter: function (param) {
			                                return Math.round(param.value)
			                            }
			                        }
			                    }
			                },
			                data : [
			                    {type : 'average', name: '평균값'}
			                ]
			            }
			        },
			        {
			            name:'Pitch',
			            type:'k',
			            data:[ // 开盘，收盘，最低，最高
			                [2320.26,2302.6,2287.3,2362.94],
			                [2300,2291.3,2288.26,2308.38],
			                [2295.35,2346.5,2295.35,2346.92],
			                [2347.22,2358.98,2337.35,2363.8],
			                [2360.75,2382.48,2347.89,2383.76],
			                [2383.43,2385.42,2371.23,2391.82],
			                [2377.41,2419.02,2369.57,2421.15],
			                [2425.92,2428.15,2417.58,2440.38],
			                [2411,2433.13,2403.3,2437.42],
			                [2432.68,2434.48,2427.7,2441.73],
			                [2430.69,2418.53,2394.22,2433.89],
			                [2416.62,2432.4,2414.4,2443.03],
			                [2441.91,2421.56,2415.43,2444.8],
			                [2420.26,2382.91,2373.53,2427.07],
			                [2383.49,2397.18,2370.61,2397.94],
			                [2378.82,2325.95,2309.17,2378.82],
			                [2322.94,2314.16,2308.76,2330.88],
			                [2320.62,2325.82,2315.01,2338.78],
			                [2313.74,2293.34,2289.89,2340.71],
			                [2297.77,2313.22,2292.03,2324.63],
			                [2322.32,2365.59,2308.92,2366.16],
			                [2364.54,2359.51,2330.86,2369.65],
			                [2332.08,2273.4,2259.25,2333.54],
			                [2274.81,2326.31,2270.1,2328.14],
			                [2333.61,2347.18,2321.6,2351.44],
			                [2340.44,2324.29,2304.27,2352.02],
			                [2326.42,2318.61,2314.59,2333.67],
			                [2314.68,2310.59,2296.58,2320.96],
			                [2309.16,2286.6,2264.83,2333.29],
			                [2282.17,2263.97,2253.25,2286.33],
			                [2255.77,2270.28,2253.31,2276.22],
			                [2269.31,2278.4,2250,2312.08],
			                [2267.29,2240.02,2239.21,2276.05],
			                [2244.26,2257.43,2232.02,2261.31],
			                [2257.74,2317.37,2257.42,2317.86],
			                [2318.21,2324.24,2311.6,2330.81],
			                [2321.4,2328.28,2314.97,2332],
			                [2334.74,2326.72,2319.91,2344.89],
			                [2318.58,2297.67,2281.12,2319.99],
			                [2299.38,2301.26,2289,2323.48],
			                [2273.55,2236.3,2232.91,2273.55],
			                [2238.49,2236.62,2228.81,2246.87],
			                [2229.46,2234.4,2227.31,2243.95],
			                [2234.9,2227.74,2220.44,2253.42],
			                [2232.69,2225.29,2217.25,2241.34],
			                [2196.24,2211.59,2180.67,2212.59],
			                [2215.47,2225.77,2215.47,2234.73],
			                [2224.93,2226.13,2212.56,2233.04],
			                [2236.98,2219.55,2217.26,2242.48],
			                [2218.09,2206.78,2204.44,2226.26],
			                [2199.91,2181.94,2177.39,2204.99],
			                [2169.63,2194.85,2165.78,2196.43],
			                [2195.03,2193.8,2178.47,2197.51],
			                [2181.82,2197.6,2175.44,2206.03],
			                [2201.12,2244.64,2200.58,2250.11],
			                [2236.4,2242.17,2232.26,2245.12],
			                [2242.62,2184.54,2182.81,2242.62],
			                [2187.35,2218.32,2184.11,2226.12],
			                [2213.19,2199.31,2191.85,2224.63],
			                [2203.89,2177.91,2173.86,2210.58],
			                [2170.78,2174.12,2161.14,2179.65],
			                [2179.05,2205.5,2179.05,2222.81],
			                [2212.5,2231.17,2212.5,2236.07],
			                [2227.86,2235.57,2219.44,2240.26],
			                [2242.39,2246.3,2235.42,2255.21],
			                [2246.96,2232.97,2221.38,2247.86],
			                [2228.82,2246.83,2225.81,2247.67],
			                [2247.68,2241.92,2231.36,2250.85],
			                [2238.9,2217.01,2205.87,2239.93],
			                [2217.09,2224.8,2213.58,2225.19],
			                [2221.34,2251.81,2210.77,2252.87],
			                [2249.81,2282.87,2248.41,2288.09],
			                [2286.33,2299.99,2281.9,2309.39],
			                [2297.11,2305.11,2290.12,2305.3],
			                [2303.75,2302.4,2292.43,2314.18],
			                [2293.81,2275.67,2274.1,2304.95],
			                [2281.45,2288.53,2270.25,2292.59],
			                [2286.66,2293.08,2283.94,2301.7],
			                [2293.4,2321.32,2281.47,2322.1],
			                [2323.54,2324.02,2321.17,2334.33],
			                [2316.25,2317.75,2310.49,2325.72],
			                [2320.74,2300.59,2299.37,2325.53],
			                [2300.21,2299.25,2294.11,2313.43],
			                [2297.1,2272.42,2264.76,2297.1],
			                [2270.71,2270.93,2260.87,2276.86],
			                [2264.43,2242.11,2240.07,2266.69],
			                [2242.26,2210.9,2205.07,2250.63],
			                [2190.1,2148.35,2126.22,2190.1]
			            ]
			        }
			    ]
			};
// Load data into the ECharts instance 
myChart.setOption(option); 
});
    $("#graph1-detail").css("display","none");
    $("#graph2-detail").css("display","");
});



//============================== header =========================
jQuery(document).ready(function(){
	"use strict";
	$(window).load(function(){
		$('.body-wrapper').each(function(){
			var header_area = $('.header');
			var main_area = header_area.children('.navbar');

			var logo = main_area.find('.navbar-header');
			var navigation = main_area.find('.navbar-collapse');				
			var original = {
				nav_top: navigation.css('margin-top')
			};
				
			$(window).scroll(function(){
				if( main_area.hasClass('bb-fixed-header') && ($(this).scrollTop() == 0 || $(this).width() < 750)){
					main_area.removeClass('bb-fixed-header').appendTo(header_area);
					navigation.animate({'margin-top': original.nav_top}, {duration: 100, queue: false, complete: function(){
						header_area.css('height', 'auto');
					}});								
				}else if( !main_area.hasClass('bb-fixed-header') && $(this).width() > 750 &&
					$(this).scrollTop() > header_area.offset().top + header_area.height() - parseInt($('html').css('margin-top')) ){
					
					header_area.css('height', header_area.height());
					main_area.css({'opacity': '0'}).addClass('bb-fixed-header');
					main_area.appendTo($('body')).animate({'opacity': 1});
						
					navigation.css({'margin-top': '0px'});
				}				
			});
		});			
		
		$(window).trigger('resize');
		$(window).trigger('scroll');
	});
});


//============================== ALL DROPDOWN ON HOVER =========================
jQuery(document).ready(function(){
	if($(".navbar").width() > 1007)
	{
		$('.nav .dropdown').hover(function() {
        	$(this).addClass('open');
	    },
	    function() {
	        $(this).removeClass('open');
	    });
	};
	$('.nav-category .dropdown-submenu ').hover(function() {
    	$(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });
});
//============================== SEARCH =========================
jQuery(document).ready(function(){
	$('.searchBox a').on("click",function() {
	    $(".searchBox .dropdown-menu").toggleClass('display-block');
	    $(".searchBox a i").toggleClass('fa-close').toggleClass("fa-search");
	});
});
//============================== RS-SLIDER =========================
jQuery(document).ready(function() {
	jQuery('.bannerV1 .fullscreenbanner').revolution({
		delay: 5000,
		startwidth: 1170,
		startheight: 500,
		fullWidth: "on",
		fullScreen: "off",
		hideCaptionAtLimit: "",
		dottedOverlay: "twoxtwo",
		navigationStyle: "preview4",
		fullScreenOffsetContainer: "",
		hideTimerBar:"on",
	});

	jQuery('.bannerV4 .fullscreenbanner').revolution({
		delay: 5000,
		startwidth: 835,
		startheight: 470,
		fullWidth: "off",
		fullScreen: "off",
		hideCaptionAtLimit: "",
		dottedOverlay: "twoxtwo",
		navigationStyle: "preview4",
		fullScreenOffsetContainer: "",
		hideTimerBar:"on",
		onHoverStop:"on",
	});
});

//============================== OWL-CAROUSEL =========================
jQuery(document).ready(function() {
	"use strict";
	var owl = $('.owl-carousel.featuredProductsSlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:true,
		  autoplayTimeout:2000,
		  autoplayHoverPause:true,
		  nav:true,
		  moveSlides: 4,
		  dots: false,
		  responsive:{
			  320:{
				  items:1
			  },
			  768:{
				  items:3
			  },
			  992:{
			  	items:4
			  }
		  }
	  });
	var owl = $('.owl-carousel.partnersLogoSlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:true,
		  autoplayTimeout:3000,
		  autoplayHoverPause:true,
		  nav:true,
		  dots: false,
		  responsive:{
			  320:{
			  	slideBy: 1,
				  items:1
			  },
			  768:{
			  	slideBy: 3,
				  items:3
			  },
			  992:{
			  	slideBy: 5,
				  items:5
			  }
		  }
	  });

	var owl = $('.owl-carousel.featuredCollectionSlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:false,
		  autoplayHoverPause:true,
		  nav:true,
		  dots: false,
		  responsive:{
			  320:{
			  	slideBy: 1,
				  items:1
			  },
			  768:{
			  	slideBy: 2,
				  items:2
			  },
			  992:{
			  	slideBy: 2,
			  	items:2
			  }
		  }
	  });

	  var owl = $('.owl-carousel.dealSlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:false,
		  nav:true,
		  moveSlides: 1,
		  dots: false,
		  responsive:{
			  320:{
			  	slideBy: 1,
				  items:1
			  },
			  768:{
			  	slideBy: 3,
				  items:3
			  },
			  992:{
			  	slideBy: 3,
			  	items:3
			  }
		  }
	  });

	  var owl = $('.owl-carousel.testimonialSlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:true,
		  autoplayTimeout:4000,
		  autoplayHoverPause:true,
		  smartSpeed:1000,
		  nav:true,
		  moveSlides: 1,
		  dots: false,
		  responsive:{
			  320:{
				  items:1
			  },
			  768:{
				  items:1
			  },
			  992:{
			  	items:1
			  }
		  }
	  });

	  var owl = $('.owl-carousel.categorySlider');
	  owl.owlCarousel({
		  loop:true,
		  margin:28,
		  autoplay:false,
		  nav:true,
		  moveSlides: 1,
		  dots: false,
		  smartSpeed:1000,
		  responsive:{
			  320:{
				  items:1
			  },
			  768:{
				  items:1
			  },
			  992:{
			  	items:1
			  }
		  }
	  });

	var owl = $('.owl-carousel.bannerV3');
	  owl.owlCarousel({
		  loop:true,
		  autoplay:true,
		  autoplayTimeout:4000,
		  autoplayHoverPause:true,
		  nav:true,
		  moveSlides: 1,
		  dots: false,
		  margin: 15,
		  items: 1,
		  responsive:{
			  320:{
				  items:1,
				  stagePadding: 20
			  },
			  768:{
				  items:1,
				  stagePadding: 100,
				  margin: 50
			  },
			  992:{
			  	items:1,
			  	stagePadding: 250,
			  	 margin: 50
			  }
		  }
	  });

});


//============================== SELECT BOX =========================
jQuery(document).ready(function() {
	$('.select-drop').selectbox();
});

//============================== SIDE NAV MENU TOGGLE =========================
jQuery(document).ready(function() {
	$('.side-nav li a').click(function() {
		$(this).find('i').toggleClass('fa fa-minus fa fa-plus');
	});
});

//============================== PRICE SLIDER RANGER =========================
jQuery(document).ready(function() {
	var minimum = 20;
	var maximum = 300;

	$( "#price-range" ).slider({
		range: true,
		min: minimum,
		max: maximum,
		values: [ minimum, maximum ],
		slide: function( event, ui ) {
			$( "#price-amount-1" ).val( "$" + ui.values[ 0 ] );
			$( "#price-amount-2" ).val( "$" + ui.values[ 1 ] );
		}
	});

	$( "#price-amount-1" ).val( "$" + $( "#price-range" ).slider( "values", 0 ));
	$( "#price-amount-2" ).val( "$" + $( "#price-range" ).slider( "values", 1 ));
});
//============================== PRODUCT SINGLE SLIDER =========================
jQuery(document).ready(function() {
	(function($){
	  $('#thumbcarousel').carousel(0);
	  var $thumbItems = $('#thumbcarousel .item');
	    $('#carousel').on('slide.bs.carousel', function (event) {
	     var $slide = $(event.relatedTarget);
	     var thumbIndex = $slide.data('thumb');
	     var curThumbIndex = $thumbItems.index($thumbItems.filter('.active').get(0));
	    if (curThumbIndex>thumbIndex) {
	      $('#thumbcarousel').one('slid.bs.carousel', function (event) {
	        $('#thumbcarousel').carousel(thumbIndex);
	      });
	      if (curThumbIndex === ($thumbItems.length-1)) {
	        $('#thumbcarousel').carousel('next');
	      } else {
	        $('#thumbcarousel').carousel(numThumbItems-1);
	      }
	    } else {
	      $('#thumbcarousel').carousel(thumbIndex);
	    }
	  });
	})(jQuery);
});

jQuery(document).ready(function() {
	$(".quick-view .btn-block").click(function(){
        $(".quick-view").modal("hide");
    });
});

//============================== Count down triger =========================
jQuery(document).ready(function() {
	"use strict";
 	$('#simple_timer').syotimer({
        year: 2017,
        month: 5,
        day: 9,
        hour: 20,
        minute: 30,
    });
    $('.bannerV3 #slider_timer').syotimer({
        year: 2017,
        month: 1,
        day: 9,
        hour: 20,
        minute: 30,
    });
});

//============================== ACCORDION OR COLLAPSE ICON CHANGE =========================
  
    var allIcons = $("#faqAccordion .panel-heading i.fa");
    $('#faqAccordion .panel-heading').click(function(){
      allIcons.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsOne = $("#accordionOne .panel-heading i.fa");
    $('#accordionOne .panel-heading').click(function(){
      allIconsOne.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsTwo = $("#accordionTwo .panel-heading i.fa");
    $('#accordionTwo .panel-heading').click(function(){
      allIconsTwo.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsThree = $("#togglesOne .panel-heading i.fa");
    $('#togglesOne .panel-heading').click(function(){
      allIconsThree.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

    var allIconsFour = $("#togglesTwo .panel-heading i.fa");
    $('#togglesTwo .panel-heading').click(function(){
      allIconsFour.removeClass('fa-chevron-down').addClass('fa-chevron-up');
      $(this).find('i.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });