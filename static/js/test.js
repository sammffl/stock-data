const option = {
    title: {
        text: '研究五家公司股价趋势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['Tesla', 'Google', 'Apple', 'Amazon', 'Facebook']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2017年1月','2017年7月']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'Tesla',
            type:'line',
            stack: '总量',
            data:[237.75, 328.40,]
        },
        {
            name:'Google',
            type:'line',
            stack: '总量',
            data:[807.88, 972.92,]
        },
        {
            name:'Apple',
            type:'line',
            stack: '总量',
            data:[119.04, 150.27,]
        },
        {
            name:'Amazon',
            type:'line',
            stack: '总量',
            data:[817.14, 1025.67,]
        },
        {
            name:'Facebook',
            type:'line',
            stack: '总量',
            data:[128.34, 163.43,]
        }
    ]
};
