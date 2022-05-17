
// const ctx = document.getElementById('participantsLineChart').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ['2015/2016','2016/2017','2017/2018','2018/2019', '2019/2020', '2020/2021'],
//         datasets: [{
//             label: 'Yearly Scores',
//             data: [ 18765,18349,18738,22668, 13234,17543 ],
//             backgroundColor: [
                
//                 'rgb(41,182,246)'
                
//             ],
//             borderColor: [
//                 'rgb(41,182,246)'
                
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         resposive:true
//     }
// });

var xValues = ['2015/2016','2016/2017','2017/2018','2018/2019', '2019/2020', '2020/2021'];
var yValues = [18765,18349,18738,22668, 13234,17543];

new Chart("participantsLineChart", {
  type: "line",
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

