var xValues = ['2017/2018', '2018/2019', '2019/2020', '2020/2021'];
var yValues = [388972830.43, 306037355.93, 489239055.22, 359575781.33];
var barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("bkbkLineChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
           label:'Amount in Kshs.',
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: { resposive: true }
});
