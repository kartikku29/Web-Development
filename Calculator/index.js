// console.log('jf');
let val = document.getElementById('screen_value');
let count = 0;

function screen_val(para) {
    if (para == '+' || para == '-' || para == '/' || para == '*' || para == '(' || para == ')') {
        val.value += para;
        count = 0;
    } else {

        if (para == 'sin') {
            val.value = Math.sin(val.value);
            val.value = round(val.value)


        }
        if (para == 'cos') {
            val.value = Math.cos(val.value);
            val.value = round(val.value)

        }
        if (para == 'tan') {
            val.value = Math.tan(val.value);
            val.value = round(val.value)


        }
        if (para == 'cot') {
            val.value = Math.cot(val.value);
            val.value = round(val.value)


        }
        if (para == 'cosec') {
            val.value = Math.cosec(val.value);
            val.value = round(val.value)


        }
        if (para == 'sec') {
            val.value = Math.sec(val.value);
            val.value = round(val.value)
        }
        if (para == 'cot') {
            val.value = Math.cot(val.value);
            val.value = round(val.value)

        }
        if (para == 'x2') {
            val.value = eval(val.value * val.value);
            return;
        }

        if (para == 'root') {
            val.value = Math.sqrt(val.value);
            return;
        }
        if (para == '1/x') {
            val.value = 1 / val.value;
        }
        if (para == 'x^y') {

            let temp1 = val.value;
            val.value = `${temp1} ^ `;
            // for (i in val.value) {
            //     console.log('\n', i);
            // }
            return;
        } else {
            if (count == 1) {
                val.value = '';
                count = 0;
            } else {
                val.value += para;
            }

        }


    }
}

// parseFloat(subTotal).toFixed(2); 
function answer() {
    if (val.value == "") {
        val.value = ""
    } else {
        let screen_and = eval(val.value);
        val.value = screen_and;
        count++;
    }

}

function clearscreen() {
    val.value = '';
}

function backSpace() {
    val.value = val.value.slice(0, val.value.length - 1)
}

// function standard() {
//     let standard_select = document.querySelector('navbar');
// }

function open_nav() {
    // alert('dgkdg');
    let nav = document.querySelector('.btn_open');
    let select = document.querySelector('.navbar');
    select.classList.toggle('active');
}

function standard() {
    document.querySelector('.choice').innerText = 'Standard';
}

function date_calculation() {
    document.querySelector('.choice').innerText = 'Date Calculation';
}

function scientific() {
    document.querySelector('.choice').innerText = 'Scientific';
}

function programmer() {
    document.querySelector('.choice').innerText = 'Programmer';
}

function currency() {
    document.querySelector('.choice').innerText = 'Currency';
}

function volume() {
    document.querySelector('.choice').innerText = 'Volume';
}

function length() {
    document.querySelector('.choice').innerText = 'Length';
}

function weight() {
    document.querySelector('.choice').innerText = 'Weight';
}

function temp() {
    document.querySelector('.choice').innerText = 'Temperature';
}

function energy() {
    document.querySelector('.choice').innerText = 'Energy';
}

function area() {
    document.querySelector('.choice').innerText = 'Area';
}

function time() {
    document.querySelector('.choice').innerText = 'Time';
}

function speed() {
    document.querySelector('.choice').innerText = 'Speed';
}

function power() {
    document.querySelector('.choice').innerText = 'Power';
}

function data() {
    document.querySelector('.choice').innerText = 'Data';
}

function pressure() {
    document.querySelector('.choice').innerText = 'Pressure';
}


// --------------------Scitific Section Started---------------------
function sci_btn_open() {

    let sci_select = document.querySelector('.scr_trigo_key_main');
    sci_select.classList.toggle('active_trigo_key_main');
    if (sci_select.classList.contains('active_trigo_key_main')) {
        document.querySelector('.sci_btn_open').style.display = 'none';
        document.querySelector('.sci_btn_close').style.display = 'block';
    } else {
        document.querySelector('.sci_btn_open').style.display = 'block';
        document.querySelector('.sci_btn_close').style.display = 'none';
    }

}