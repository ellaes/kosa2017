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
            	var myChart = ec.init(document.getElementById('main2')); 
            	
            	var option =  {
            		    title : {
            		        text: '파이차트 예제',
            		        subtext: 'sample1',
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
});
                    