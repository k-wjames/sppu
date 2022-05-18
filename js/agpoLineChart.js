var xValues = ['2017/2018','2018/2019', '2019/2020', '2020/2021'];
var yValues = [ 329638058.49,346864481.86,190725350.94,141559349.35];

new Chart("agpoLineChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
        label:'Amount in Kshs.',
      backgroundColor: 'rgb(41,182,246)',
      borderColor: 'rgb(41,182,246)',
      borderWidth: 1,
      data: yValues
    }]
  },
  options:{resposive:true}
});