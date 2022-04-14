
const ctx = document.getElementById('lineChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec','Jan', 'Feb', 'Mar', 'April'],
        datasets: [{
            label: '',
            data: [2028, 3500, 3750, 2855, 4002, 2900,3228, 3500, 3750, 2855],
            backgroundColor: [
                'rgb(68, 84, 106)'
                
            ],
            borderColor: [
                'rgb(68, 84, 106)'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        resposive:true
    }
});

