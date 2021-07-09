const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;


let countDown = new Date("Jul 2, 2021 19:41:00").getTime();
x = setInterval(function() {
  let now = new Date().getTime(),
    distance = countDown - now;

  document.getElementById('day').innerText = Math.floor(distance / day);
  document.getElementById('hour').innerText = Math.floor(
    (distance % day) / hour
  );
  document.getElementById('minute').innerText = Math.floor(
    (distance % hour) / minute
  );
  document.getElementById('second').innerText = Math.floor(
    (distance % minute) / second
  );
  if (distance < 0) {
    $(function(){
        setTimeout(function(){ showTarget(); }, 1000);
   });
   function showTarget(){
       $("#juduldua").show();
   }
    }
    
  }, 1000);
