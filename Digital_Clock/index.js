let d = setInterval(function clock() {
        let date = new Date();

        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();

        let temp = document.getElementById('format');
        let time_format = temp.getAttribute('val');
        if (time_format === "12") {
            if (hh == 0) {
                hh = 12;
            }
            if (hh > 12) {
                hh = hh - 12;
                document.getElementById('pm').innerText = "PM";
            }
            if (hh == 12 || hh > 12) {
                document.getElementById('pm').innerText = "PM";
            }
        }
        if (hh < 10) {
            hh = "0" + hh;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }
        if (ss < 10) {
            ss = "0" + ss;
        }
        document.getElementById('hour').innerHTML = hh;
        document.getElementById('min').innerHTML = mm;
        document.getElementById('sec').innerHTML = ss;
        document.getElementById('month').innerHTML = month(date.getMonth()) + ",";
        document.getElementById('day').innerHTML = day(date.getDay());
        document.getElementById('cur_date').innerHTML = date.getDate();
        document.getElementById('yr').innerHTML = date.getFullYear();
    },
    1000);

function day(d) {
    switch (d) {
        case 1:
            return "Monday"
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        case 7:
            return "Sunday";
            break;

        default:
            break;
    }
}

function month(mon) {
    switch (mon) {
        case 0:
            return "Jan";
            break;
        case 1:
            return "Feb";
            break;
        case 2:
            return "Mar";
            break;
        case 3:
            return "Apr";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "Jun";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "Aug";
            break;
        case 8:
            return "Sep";
            break;
        case 9:
            return "Oct";
            break;
        case 10:
            return "Nov ";
            break;
        case 11:
            return "Dec";
            break;
        default:
            break;
    }
}



function myfun() {

    let s = document.querySelector('.switcher');
    s.classList.toggle('active');
    let get = document.getElementById('format');
    if (s.classList.contains('active')) {
        get.setAttribute("val", "24");
        get.innerHTML = "24-Hours Format"
    } else {
        get.setAttribute("val", "12");
        get.innerHTML = "12-Hours Format"

    }
}

function show_format() {
    let show = document.querySelector('.icon');
    show.classList.toggle('active_icon');
}