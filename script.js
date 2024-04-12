let dateTag = document.getElementById("date"),
    date = new Date(),
    number = Number(window.prompt("Minute to start with:"))

//Date producer
const Day = (date) => {
    switch(date.getDay()){
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
        default:
            return "NoDay(Error)"
    }
},month = (date) => {
    switch(date.getMonth() + 1){
        case 1:
            return "Jan"
        case 2:
            return "Feb"
        case 3:
            return "Mar"
        case 4:
            return "Apr"
        case 5:
            return "May"
        case 6:
            return "Jun"
        case 7:
            return "Jul"
        case 8:
            return "Aug"
        case 9:
            return "Sep"
        case 10:
            return "Oct"
        case 11:
            return "Nov"
        case 12:
            return "Dec"
    }
}
dateTag.innerHTML = `${Day(date)}, ${date.getDate()} ${month(date)}, ${date.getFullYear()}`

//Icons,minutes and seconds Span
let minuteSpan = document.querySelector(".minutes"),
    secondSpan = document.querySelector(".seconds"),
    pauseBtn = document.getElementById('pause'),
    playBtn = document.getElementById('play'),
    paused = false

if(Number.isNaN(number)){
    minuteSpan.innerHTML = 'Invalid minute set'
    secondSpan.innerHTML = 'Invalid min=seconds'
}
else{
    let min
        pauseBtn.addEventListener('click',() => paused = true)
        playBtn.addEventListener('click',() => paused=false)

        min = number - 1,second = 59
        minuteSpan.innerHTML = min
        setInterval(() => {
            if(paused !== true){
                second -= 1
                secondSpan.innerHTML = second
                if(second == 0){
                    min -= 1
                    minuteSpan.innerHTML = min
                    second = 59
                }
            }
        },1000)
    
}

