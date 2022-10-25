
const ctx = document.getElementById('lineChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2012/13','2013/14','2014/15','2015/2016','2016/2017','2017/2018','2018/2019', '2019/2020', '2020/2021'],
        datasets: [{
            label: 'Yearly Scores',
            data: [ 2.4196, 2.7206, 2.4929, 2.3935 , 2.9555, 3.2150, 3.2540,  2.98360,  3.11],
            backgroundColor: [
                
                'rgb(41,182,246)'
                
            ],
            borderColor: [
                'rgb(41,182,246)'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        resposive:true
    }
});


