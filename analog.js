setInterval(time, 1)

    function time() {
        let date = new Date()
        let sec_n = document.querySelector(".sec");
        let sec = date.getSeconds();
        let new_sec = ((sec / 60) * 360 + 90);
        sec_n.style.transform = `rotate(${new_sec}deg)`;
        let min_n = document.querySelector(".min");
        let min = date.getMinutes();
        let new_min = ((min / 60) * 360 + 90);
        min_n.style.transform = `rotate(${new_min}deg)`;
        let hour_n = document.querySelector(".hour");
        let hour = date.getHours();
        let new_hour = ((hour / 12) * 360 + 90 + (0.5 * min));
        hour_n.style.transform = `rotate(${new_hour}deg)`;
        
    }
