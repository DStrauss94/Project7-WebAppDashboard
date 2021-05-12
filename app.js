
const alertBanner = document.getElementById("alert");
const trafficCanvas = document.getElementById("traffic-chart");


//create the html for the banner
alertBanner.innerHTML = 
`<div class = "alert-banner" >
    <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
    <p class= "alert-banner-close">x</p>
</div> `

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if( element.classList.contains("alert-banner-close")){
        alertBanner.style.display = "none";
    }
});

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
            "4-10", "11-7" , "18-24", "25-31"],
            datasets: [{
                data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850
                , 2250, 1500, 2500],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1,
            }]
        };

let trafficDataHourly = {
    labels: ["00-02", "03-05", "06-07", "08-09", "10-11", "12-13", "14-15",
            "16-17", "18-19" , "20-21", "22-23"],
            datasets: [{
                data: [822, 2000, 506, 362, 1250, 676, 1654, 200
                , 2500, 1506, 2856],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1,
            }]
        };
let trafficDataDaily = {
    labels: ["01-03", "04-06", "07-09", "10-12", "13-15", "16-18", "19-21",
            "22-24", "25-27" , "28-29", "30-31"],
            datasets: [{
                data: [100, 2525, 1111, 2222, 457, 753, 1365, 2022
                , 210, 322, 2485],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1,
            }]
        };
        
let trafficDataWeekly = {
    labels: ["00-02", "03-05", "06-07", "08-09", "10-11", "12-13", "14-15",
            "16-17", "18-19" , "20-21", "22-23"],
            datasets: [{
                data: [822, 2000, 506, 362, 1250, 676, 1654, 200
                , 2500, 1506, 2856],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1,
            }]
        };

let trafficDataMonthly = {
    labels: ["01", "02", "03", "04", "05", "06", "07",
            "08", "09" , "10", "11", "12"],
            datasets: [{
                data: [822, 2000, 506, 362, 1250, 676, 1654, 200
                , 2500, 1506, 2856, 100],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                borderWidth: 1,
            }]
        }; 

        let trafficOptions = {
            aspectRatio: 2.5,
            animation: {
            duration: 0
            },
            scales: {
                y:{
                    beginAtZero : true
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        };

        let trafficChart = new Chart(trafficCanvas ,{
            type: 'line',
            data: trafficData,
            options: trafficOptions
        });

       
        const updateChart = (chart, newData) => {
            chart.data.labels = newData.labels;
            chart.data.datasets[0].data = newData.datasets[0].data;
            chart.update();
          };

          function trafficLinkWhite(){
            lastestData.style.backgroundColor = "white";
            lastestData.style.borderRadius = 0;
            lastestData.style.paddingLeft = 0;
            lastestData.style.paddingRight = 0;
          }
        const hourly = document.getElementById("hourly");
        const daily = document.getElementById("daily");
        const weekly = document.getElementById("weekly");
        const monthly = document.getElementById("monthly");
        let lastestData = null; 


        hourly.addEventListener('click', () => {

          if(lastestData != null){
            trafficLinkWhite();
          }
            hourly.style.backgroundColor = "#95eb34";
            hourly.style.borderRadius = "25px";
            hourly.style.paddingLeft = "1em";
            hourly.style.paddingRight = "1em";
            updateChart(trafficChart, trafficDataHourly);
            lastestData = hourly;
          
            
        });

        daily.addEventListener('click', () => {
            if(lastestData != null){
                trafficLinkWhite();
              }
            daily.style.backgroundColor = "#95eb34";
            daily.style.borderRadius = "25px";
            daily.style.paddingLeft = "1em";
            daily.style.paddingRight = "1em";
            updateChart(trafficChart, trafficDataDaily);
            lastestData = daily;

        });

        weekly.addEventListener('click', () => {
            if(lastestData != null){
                trafficLinkWhite();
              }

            weekly.style.backgroundColor = "#95eb34";
            weekly.style.borderRadius = "25px";
            weekly.style.paddingLeft = "1em";
            weekly.style.paddingRight = "1em";
            updateChart(trafficChart, trafficDataWeekly);
            lastestData = weekly;

            
        });
        monthly.addEventListener('click', () => {
            if(lastestData != null){
                trafficLinkWhite();
              }
            monthly.style.backgroundColor = "#95eb34";
            monthly.style.borderRadius = "25px";
            monthly.style.paddingLeft = "1em";
            monthly.style.paddingRight = "1em";
            updateChart(trafficChart, trafficDataMonthly);
            lastestData = monthly;

            
        });
