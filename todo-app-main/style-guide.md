# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Bright Blue: hsl(220, 98%, 61%)
- Check Background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)

### Neutral

### Light Theme

- Very Light Gray: hsl(0, 0%, 98%)
- Very Light Grayish Blue: hsl(236, 33%, 92%)
- Light Grayish Blue: hsl(233, 11%, 84%)
- Dark Grayish Blue: hsl(236, 9%, 61%)
- Very Dark Grayish Blue: hsl(235, 19%, 35%)

### Dark Theme

- Very Dark Blue: hsl(235, 21%, 11%)
- Very Dark Desaturated Blue: hsl(235, 24%, 19%)
- Light Grayish Blue: hsl(234, 39%, 85%)
- Light Grayish Blue (hover): hsl(236, 33%, 92%)
- Dark Grayish Blue: hsl(234, 11%, 52%)
- Very Dark Grayish Blue: hsl(233, 14%, 35%)
- Very Dark Grayish Blue: hsl(237, 14%, 26%)

## Typography

### Body Copy

- Font size: 18px

### Font

- Family: [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans)
- Weights: 400, 700
function daymode() {
    // document.querySelector('.sun').classList.toggle('day_mode')
    document.querySelector('.sun').style.display = "none";
    document.querySelector('.moon').style.display = "block";
    document.querySelector(':root').style.setProperty("--change-background", "url('./images/bg-desktop-light.jpg')");
    document.querySelector('body').style.backgroundColor = "white"
    document.querySelector('.write_todo').style.backgroundColor = "white"
    document.querySelector('.write_text').style.backgroundColor = "white"
    document.querySelector('.write_text').style.color = " hsl(233, 14%, 35%)"
    document.querySelector('.mainbody').style.backgroundColor = "white"
}

function nightmode() {
    // document.querySelector('.sun').classList.toggle('day_mode');
    document.querySelector('.sun').style.display = "block";
    document.querySelector('.moon').style.display = "none";
    document.querySelector(':root').style.setProperty("--change-background", "url('./images/bg-desktop-dark.jpg')");
}