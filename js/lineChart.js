
const ctx = document.getElementById('lineChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Yearly Scores',
            data: [ 3.2150, 3.2540,  2.98360,  3.1100],
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

