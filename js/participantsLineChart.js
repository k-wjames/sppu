var xValues = ['2015/16','2016/17','2017/18','2018/19', '2019/20', '2020/21', '2021/22'];
var yValues = [18765,18349,18738,22668, 13234,17543, 19098 ];
var barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("participantsLineChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
        label:'Annual Participant Number',
      backgroundColor: 'rgb(41,182,246)',
      borderColor: 'rgb(41,182,246)',
      borderWidth: 1,
      data: yValues
    }]
  },
  options:{resposive:true}
});

