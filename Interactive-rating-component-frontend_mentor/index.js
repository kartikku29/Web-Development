function mouseOver1() {
    document.getElementById("1").style.backgroundColor = "hsl(25, 97%, 53%)";
}

function mouseOut1() {
    document.getElementById("1").style.backgroundColor = "hsl(186, 17%, 23%)";
}

function mouseOver2() {
    document.getElementById("2").style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById("1").style.backgroundColor = "hsl(217, 12%, 63%)"

}

function mouseOut2() {
    document.getElementById("2").style.backgroundColor = "hsl(186, 17%, 23%)";
    document.getElementById("1").style.backgroundColor = "hsl(186, 17%, 23%)";
}

function mouseOver3() {
    document.getElementById("3").style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById("2").style.backgroundColor = "hsl(217, 12%, 63%)"

}

function mouseOut3() {
    document.getElementById("3").style.backgroundColor = "hsl(186, 17%, 23%)";
    document.getElementById("2").style.backgroundColor = "hsl(186, 17%, 23%)";
}

function mouseOver4() {
    document.getElementById("4").style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById("3").style.backgroundColor = "hsl(217, 12%, 63%)"

}

function mouseOut4() {
    document.getElementById("4").style.backgroundColor = "hsl(186, 17%, 23%)";
    document.getElementById("3").style.backgroundColor = "hsl(186, 17%, 23%)";
}

function mouseOver5() {
    document.getElementById("5").style.backgroundColor = "hsl(25, 97%, 53%)";
    document.getElementById("4").style.backgroundColor = "hsl(217, 12%, 63%)"

}

function mouseOut5() {
    document.getElementById("5").style.backgroundColor = "hsl(186, 17%, 23%)";
    document.getElementById("4").style.backgroundColor = "hsl(186, 17%, 23%)";
}



function show(index) {
    let html = `<p>You Selected ${index} out of 5</p>`
    document.getElementById('selected').innerHTML = html;
    document.getElementById('body').style.display = 'none';
    document.getElementById('thank_you').style.display = 'block';

}