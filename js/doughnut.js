const chart = document.getElementById("doughnut").getContext("2d");

const myCustomers = new Chart(chart, {
  type: "doughnut",
  data: {
    labels: ["National Gov", "County Gov", "Parastatals", "NGOs", "Other"],
    datasets: [
      {
        label: "# of Votes",
        data: [12096, 9719, 7905, 9238, 6809],
        backgroundColor: [

          'rgb(41,182,246)',
          'rgb(236,64,122)',
          'rgb(102,187,106)',
          'rgb(255,167,38)',
          'rgb(68, 114, 196)'
        ],
        borderColor: [
          'rgb(41,182,246)',
          'rgb(236,64,122)',
          'rgb(102,187,106)',
          'rgb(255,167,38)',
          'rgb(68, 114, 196)'
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive:true
  },
});