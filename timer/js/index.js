document.getElementById("done").addEventListener("click", function () {
    var dateInputs = document.getElementsByClassName("dateInput");
    var Iday = Number(dateInputs[0].value);
    var Imonth = Number(dateInputs[1].value);
    var Iyear = Number(dateInputs[2].value);
    var Ihour = Number(dateInputs[3].value);
    var Iminute = Number(dateInputs[4].value);
    var Isecond = Number(dateInputs[5].value);
    /*var IutcNP = dateInputs[6].value;
    var IutcH = Number(dateInputs[7].value);
    var IutcM = Number(dateInputs[8].value);
    
    if (IutcNP === "+") {
        Iminute += IutcM;
        while(Iminute > 59) {
            Iminute -= 60;
            Ihour += 1;
        }
        Ihour += IutcH;
        while(Ihour > 23) {
            Ihour -= 24;
            Iday += 1;
        }
        console.log(Iminute + " " + Ihour);
    } else {
        Iminute -= IutcM;
        while(Iminute < 0) {
            Iminute += 60;
            Ihour -= 1;
        }
        Ihour -= IutcH;
        while(Ihour < 0) {
            Ihour += 24;
            Iday -= 1;
        }
        console.log(Iminute + " " + Ihour);
    }
    */
    var urlText = "file:///C:/Users/Emile/Desktop/sites/vrai%20site/timer.html#" + "y" + Iyear + "M" + Imonth + "d" + Iday + "h" + Ihour + "m" + Iminute + "s" + Isecond;
    
    document.getElementById("urlText").textContent = urlText;
});