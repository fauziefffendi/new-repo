const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2025,2,25,12,30,00);
// console.log(futureDate);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `give away ends on ${weekday},
${date} ${month} ${year} ${hours}:${minutes}`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  // console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMin = 60*1000;
  // calculate all value
  let days = Math.floor(t/oneDay);
  let hours = Math.floor((t % oneDay)/oneHour);
  let mins = Math.floor((t % oneHour)/oneMin);
  let secs = Math.floor((t % oneMin)/ 1000);
  
  // set values array;
  const values = [days,hours,mins,secs];

  function format(item){
    if(item<10){
      return item = `0${item}`
    }
    return item
  }

  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  });
  if(t<0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class = "expired">sorry, this giveaway has expired</h4>`;
  }
};

// countdown
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime();
