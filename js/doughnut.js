
const ctx = document.getElementById('doughnut').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['National Gov', 'Counties', 'Ministries', 'State Departments', 'Parastatals', 'NGOs'],
        datasets: [{
            label: 'Customers',
            data: [5000, 3500, 6750, 9855, 1002, 2900],
            backgroundColor: [
                'rgba(255, 155, 99, 1)',
                'rgba(255, 162, 235, 1)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 0.2)'
                
            ],
            borderColor: [
                'rgba(255, 155, 99, 1)',
                'rgba(255, 162, 235, 1)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 0.2)'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        resposive:true
    }
});

