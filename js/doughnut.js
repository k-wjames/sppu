const chart = document.getElementById("doughnut").getContext("2d");

const myCustomers = new Chart(chart, {
  type: "doughnut",
  data: {
    labels: ["National Gov", "County Gov", "Ministries", "MDAs", "Parastatals", "NGOs", "Other"],
    datasets: [
      {
        label: "# of Votes",
        data: [12096, 9719, 3006, 5697, 7905, 9238, 6809],
        backgroundColor: [

          'rgb(68, 84, 106)',
          'rgb(91, 155, 213)',
          'rgb(237, 125, 49)',
          'rgb(165, 165, 165)',
          'rgb(68, 114, 196)',
          'rgb(112, 173, 71)',
          'rgb(112, 48, 160)'
        ],
        borderColor: [
          'rgb(68, 84, 106)',
          'rgb(91, 155, 213)',
          'rgb(237, 125, 49)',
          'rgb(165, 165, 165)',
          'rgb(68, 114, 196)',
          'rgb(112, 173, 71)',
          'rgb(112, 48, 160)'
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive:true
  },
});