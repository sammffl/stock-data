import echarts from 'echarts';
import '../sass/main.css';

let myChart = echarts.init(window.document.getElementById('app'));

const companies = ['Tesla', 'Google', 'Apple', 'Amazon', 'Facebook'];
const xAxisData = ['2017年1月', '2017年7月'];
const seriesData = {
    'Tesla': [237.75, 328.40,],
    'Google': [807.88, 972.92,],
    'Apple': [119.04, 150.27,],
    'Amazon': [817.14, 1025.67,],
    'Facebook': [128.34, 163.43,]
};
let series = [];
for (let i = 0; i < companies.length; i++) {
    let s = {
        name: companies[i],
        type: 'line',
        data: seriesData[companies[i]],
        stack: '总量',
    };
    series.push(s);
}

const option = {
    title: {
        text: '研究五家公司股价趋势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: companies
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
        data: xAxisData
    },
    yAxis: {
        type: 'value'
    },
    series: series
};

myChart.setOption(option);
