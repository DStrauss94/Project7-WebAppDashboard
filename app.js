
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

// TRAFFIC DATA ////////////////////////////////////////////////////////////////////////////

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
            "4-10", "11-7" , "18-24", "25-31"],
            datasets: [{
                data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850
                , 2250, 1500, 2500],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                fill: true,
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
                fill: true,
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
                fill: true,
                borderWidth: 1,
            }]
        };
        
let trafficDataWeekly = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7",
            "Week 8", "Week 9" , "Week 10", "Week 11"],
            datasets: [{
                data: [822, 2000, 506, 362, 1250, 676, 1654, 200
                , 2500, 1506, 2856],
                backgroundColor: 'rgba(116, 119, 191, .3)',
                fill: true,
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
                fill: true,
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

          function trafficLinkGreen(label){
            label.style.backgroundColor = "#95eb34";
            label.style.borderRadius = "25px";
            label.style.paddingLeft = "1em";
            label.style.paddingRight = "1em";
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
            trafficLinkGreen(hourly);
            updateChart(trafficChart, trafficDataHourly);
            lastestData = hourly;
          
            
        });

        daily.addEventListener('click', () => {
            if(lastestData != null){
                trafficLinkWhite();
              }
            trafficLinkGreen(daily);
            updateChart(trafficChart, trafficDataDaily);
            lastestData = daily;

        });

        weekly.addEventListener('click', () => {
            if(lastestData != null){
                trafficLinkWhite();
              }

            trafficLinkGreen(weekly);
            updateChart(trafficChart, trafficDataWeekly);
            lastestData = weekly;

            
        });
        monthly.addEventListener('click', () => {
            if(lastestData != null){
                trafficLinkWhite();
              }
              trafficLinkGreen(monthly);
              updateChart(trafficChart, trafficDataMonthly);
              lastestData = monthly;

            
        });

// DAILY TRAFFIC ///////////////////////////////////////////////////////////////////////////////

const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S","M","T","W","T", "F","S"],
    datasets: [{
        label: '# of Hits',
        data: [75,115,175,125,225,200,100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales:{
        y:{
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display:false
        }
    }
};

let dailyChart = new Chart(dailyCanvas , {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

//MOBILE USERS /////////////////////////////////////////////////////////////////////////////////////////

const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop","Tablet","Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 500, 500],
        backgroundColor: ['#7477BF', '#78CF82', '#51B6C8'],
        borderWidth: 0
    }]
};

const mobileOptions = {
    plugins:{
        legend:{
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

let mobileChart = new Chart(mobileCanvas , {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

//MESSAGING SECTION///////////////////////////////////////////////////////////////////////////////

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    //ensure user and message field are filled
    if(user.value === "" && message.value === ""){
        alert("Please fill out user and message fields before sending");
    }
    else if(user.value === ""){
        alert("Please fill out user field before sending");
    }
    else if(message.value === ""){
        alert("Please fill out message field before sending");
    }
    else{
        alert(`Message successfully sent to: ${user.value}`);
    }
});


