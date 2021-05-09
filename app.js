
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

       
        function addData(chart, label, data) {
            chart.data.labels.push(label);
            chart.data.datasets.forEach((dataset) => {
                dataset.data.push(data);
            });
            chart.update();
        }
        
        function removeData(chart) {
            chart.data.labels.pop();
            chart.data.datasets.forEach((dataset) => {
                dataset.data.pop();
            });
            chart.update();
        }

        const hourly = document.getElementById("hourly");

        hourly.addEventListener('click', () => {
            hourly.style.backgroundColor = "#95eb34";
            hourly.style.borderRadius = "25px";
            hourly.style.paddingLeft = "1em";
            hourly.style.paddingRight = "1em";
            addData(trafficChart,trafficDataHourly.labels,trafficDataHourly.datasets.data);
            //removeData(trafficChart); tried using but no changes with data 
        });
