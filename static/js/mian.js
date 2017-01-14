import echarts from 'echarts';
import '../sass/main.css';

let myChart = echarts.init(window.document.getElementById('app'));

const companies = ['Tesla', 'Google', 'Apple', 'Amazon', 'Facebook'];
const xAxisData = ["1月"];
const seriesData = {
    'Tesla': [237.75],
    'Google': [807.88],
    'Apple': [119.04],
    'Amazon': [817.14],
    'Facebook': [128.34]
};
let series = [];
for (let i = 0; i < companies.length; i++) {
    let s = {
        name: companies[i],
        type: 'bar',
        data: seriesData[companies[i]],
        label: {
            normal: {
                show: true,
                position: 'top'
            }
        },
        // markLine: {
        //     data: [
        //         {type: 'average', name: '平均值'}
        //     ]
        // }
    };
    series.push(s);
}
const option = {
    title: {
        text: '研究五家公司股价趋势',
        x: 'center',
        y: 0,
    },
    legend: {
        data: companies,
        // align: 'right',
        // right: 10
        orient: 'vertical',
        right: 'right',
    },
    tooltip: {},
    xAxis: {
        data: xAxisData
    },
    yAxis: {
        name: '股价（USD）'
    },
    series: series,
};

myChart.setOption(option);
