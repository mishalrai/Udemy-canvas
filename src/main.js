
var chartData = [
    {label: 'l1', value: 10.5},
    {label: 'l2', value: 20.2},
    {label: 'l3', value: 30.3},
    {label: 'l4', value: 40.4},
];

window.onload = function(){

    new BarChart('bar-chart', 600, 600, chartData);

}