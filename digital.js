setInterval(()=>{
    let clock= document.getElementById("clock")
    let daydisplay= document.getElementById("day")
    let date1= document.getElementById("date")
    let month= document.getElementById("month")
    let year= document.getElementById("year")
    let date =new Date();
    let hours =date.getHours();
    let minutes=date.getMinutes();
    if(minutes<=9){
        minutes=`0${minutes}`;
    }

    let seconds=date.getSeconds();
    if(seconds<=9){
        seconds=`0${seconds}`;
    }
    let cMonth=date.getMonth()+1;
    let cYear=date.getFullYear();
    let day=date.getDay();
    let d=date.getDate();
    let daysName=["Sunday","Monday","Tuesday","Wednesday",
        "Thuesday","Friday","Saturday",]
    if(hours<12){
        document.getElementById("amorpm").innerHTML="AM";
    }else{
        document.getElementById("amorpm").innerHTML="PM";
    }
    clock.innerHTML=`${hours}:${minutes}:${seconds}`;
    daydisplay.innerHTML=daysName[day];
    date1.innerHTML=`${d}-`;
    month.innerHTML=cMonth;
    year.innerHTML=`-${cYear}`;
},1000);