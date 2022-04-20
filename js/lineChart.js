
const ctx = document.getElementById('lineChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2012', '2013', '2014', '2015', '2016', '2017','2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Yearly Scores',
            data: [1.5, 3.2, 2.9, 2.5, 2.2,3.01, 3.4, 2.9, 2.3, 3.0],
            backgroundColor: [
                'rgb(236,64,122)'
                
            ],
            borderColor: [
                'rgb(236,64,122)'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        resposive:true
    }
});

