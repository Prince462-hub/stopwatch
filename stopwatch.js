let seconds = document.getElementById('sec')
let minutes = document.getElementById('min')
let hours = document.getElementById('hr')
let btn = document.getElementById('btn')
console.log(btn.innerHTML)
// let second = '00'
// let minute = '0'
// let hour = 0
const inteval_id = setInterval(stopwatch, 1000)
function stopwatch() {
    // setInterval(() => {
        // }, 1000);
        btn.addEventListener('click', function () {
            second = -1
            minute = '0'
            hour = 0
            btn.innerHTML = "Stop"
        })
        second = second + 1
        second = eval(second)
        second = second < 10 && second>0 ? '0' + second : second
        if (second == 60) {
            minute = minute + 1
            minute = eval(minute)
            second = 0
        }
        second = second == 0 ? '0' + second : second
        minute = minute < 10 ? '0' + minute : minute
        if (minute == 60) {
            hour = hour + 1
            hour = eval(hour)
            minute = 0
            minute = minute == 0 ? '0' + minute : minute
        }
        hour = hour < 10 ? '0' + hour : hour
        seconds.innerHTML = second
        minutes.innerHTML = minute
        hours.innerHTML = hour
        second = eval(second)
        minute = eval(minute)
        hour = eval(hour)
    // }, 1000);
}
