const clock = document.getElementById('clock');
// console.log(date.toLocalTimeString());

setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocalTimeString();
},1000);

