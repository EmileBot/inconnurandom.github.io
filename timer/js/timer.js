var ding = new Audio("img/ding.mp3");

var urlPage = document.URL;
var hashtagUrl = urlPage.indexOf("#"); 
console.log(hashtagUrl);
if(hashtagUrl > 0) { //Si il y a #
    var NowDate = new Date();
    console.log(Number(NowDate));
    
    var NowDateTz = new Date();
    NowDateTz = Number(NowDate) + (NowDate.getTimezoneOffset() * 60000);
    NowDate = new Date(NowDateTz);
    console.log(NowDate);
    
    
    
    var year2 = NowDate.getFullYear();
    var month2 = NowDate.getMonth();
    month2 += 1;
    var day2 = NowDate.getDate();
    var hour2 = NowDate.getHours();
    var minute2 = NowDate.getMinutes();
    var second2 = NowDate.getSeconds();
    
    for(i = hashtagUrl; i <= urlPage.length; i++) { //test le d'url
        if(urlPage[i] === "y") { 
            var j = i + 1;
            var clock = true;
             while(clock === true) { 
                 if(Number(urlPage[j]) % 1 !== 0 && urlPage[j] !== "0" || j > urlPage.length) { // Si 'j' n'est pas un chiffre
                     clock = false;
                     var yearPos1 = i + 1;
                     var yearPos2 = j;
                     if(yearPos1 < yearPos2) {
                         year2 = Number(urlPage.substring(yearPos1, yearPos2));
                     }
                 }
                 j++ // Incrémentation
             }
        } else if(urlPage[i] === "M") { 
            var j = i + 1;
            var clock = true;
             while(clock === true) { 
                 if(Number(urlPage[j]) % 1 !== 0 && urlPage[j] !== "0" || j > urlPage.length) { // Si 'j' n'est pas un chiffre
                     clock = false;
                     var monthPos1 = i + 1;
                     var monthPos2 = j;
                     if(monthPos1 < monthPos2) {
                         month2 = Number(urlPage.substring(monthPos1, monthPos2));
                     }
                 }
                 j++ // Incrémentation
             }
        } else if(urlPage[i] === "d") { 
            var j = i + 1;
            var clock = true;
             while(clock === true) { 
                 if(Number(urlPage[j]) % 1 !== 0 && urlPage[j] !== "0" || j > urlPage.length) { // Si 'j' n'est pas un chiffre
                     clock = false;
                     var dayPos1 = i + 1;
                     var dayPos2 = j;
                     if(dayPos1 < dayPos2) {
                         day2 = Number(urlPage.substring(dayPos1, dayPos2));
                     }
                 }
                 j++ // Incrémentation
             }
        } else if(urlPage[i] === "h") { 
            var j = i + 1;
            var clock = true;
             while(clock === true) { 
                 if(Number(urlPage[j]) % 1 !== 0 && urlPage[j] !== "0" || j > urlPage.length) { // Si 'j' n'est pas un chiffre
                     clock = false;
                     var hourPos1 = i + 1;
                     var hourPos2 = j;
                     if(hourPos1 < hourPos2) {
                         hour2 = Number(urlPage.substring(hourPos1, hourPos2));
                     }
                 }
                 j++ // Incrémentation
             }
        } else if(urlPage[i] === "m") { 
            var j = i + 1;
            var clock = true;
             while(clock === true) { 
                 if(Number(urlPage[j]) % 1 !== 0 && urlPage[j] !== "0" || j > urlPage.length) { // Si 'j' n'est pas un chiffre
                     clock = false;
                     var minutePos1 = i + 1;
                     var minutePos2 = j;
                     if(minutePos1 < minutePos2) {
                         minute2 = Number(urlPage.substring(minutePos1, minutePos2));
                     }
                 }
                 j++ // Incrémentation
             }
        } else if(urlPage[i] === "s") { 
            var j = i + 1;
            var clock = true;
             while(clock === true) { 
                 if(Number(urlPage[j]) % 1 !== 0 && urlPage[j] !== "0" || j > urlPage.length) { // Si 'j' n'est pas un chiffre
                     clock = false;
                     var secondPos1 = i + 1;
                     var secondPos2 = j;
                     if(secondPos1 < secondPos2) {
                         second2 = Number(urlPage.substring(secondPos1, secondPos2));
                     }
                 }
                 j++ // Incrémentation
             }
        }
    }
console.log(year2);
if(month2 > 0 ) {
    month2 -= 1;
}
console.log(month2);
console.log(day2);
console.log(hour2);
console.log(minute2);
console.log(second2);
    
} else {
    console.log("Afficher page de création de date");
    var redirect = document.createElement("a");
    redirect.href = "file:///C:/Users/Emile/Desktop/sites/vrai%20site/index.html";
    document.body.appendChild(redirect);
    redirect.click();
}












function calcDate() {
    //Dates
    var actualDate = new Date();
    
    var date = new Date(year2, month2, day2, hour2, minute2, second2, 0);

    //Diff Dates
    var dateDiff = new Date();
    dateDiff = date - actualDate;

    //Transform into UNIX
    actualDate = Date.parse(actualDate);
    date = Date.parse(date);

    //Calc days, hours, minutes, seconds, miliseconds
    var day = dateDiff / 86400000;
    day = Math.trunc(day);
    dateDiff = dateDiff - day * 86400000;

    var hour = dateDiff / 3600000;
    hour = Math.trunc(hour);
    dateDiff = dateDiff - hour * 3600000;

    var minute = dateDiff / 60000;
    minute = Math.trunc(minute);
    dateDiff = dateDiff - minute * 60000;

    var second = dateDiff / 1000;
    second = Math.trunc(second);
    dateDiff = dateDiff - second * 1000;

    document.getElementById("timer").innerHTML = day + "d " + hour + "h " + minute + "m " + second + "s ";
    
    if(day <= 0 && hour <= 0 && minute <= 0 && second <= 0 && second % 5 === 0) {
        ding.play();
    }
}
calcDate();
var interval = setInterval(calcDate, 1000);

function startChrono() {
    calcDate();
    interval = setInterval(calcDate, 1000);
    document.getElementById("start").id = "pause";
    document.getElementById("pause").src = "img/pause.png"
    document.getElementById("pause").removeEventListener("click", startChrono)
    document.getElementById("pause").addEventListener("click", stopChrono);
}
function stopChrono() {
    clearInterval(interval);
    document.getElementById("pause").id = "start";
    document.getElementById("start").src = "img/start.png"
    document.getElementById("start").removeEventListener("click", stopChrono);
    document.getElementById("start").addEventListener("click", startChrono);
}

document.getElementById("pause").addEventListener("click", stopChrono);