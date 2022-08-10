document.getElementById('drop_logo').addEventListener("click", () => {
    document.querySelector('.drop_down_menu').classList.toggle("active_drop_down");
});
let html = "";
async function getdata() {
    const data = await fetch('https://restcountries.com/v3.1/all');
    const objdata = await data.json();
    // console.log(objdata);
    /*Sorting by country name*/
    for (let i = 0; i < objdata.length; i++) {
        for (let j = i; j < objdata.length; j++) {
            if (objdata[i].name.common > objdata[j].name.common) {
                let temp = objdata[i];
                objdata[i] = objdata[j];
                objdata[j] = temp;
            }
        }
    }
    objdata.forEach(function(element) {
        showcountry(element);
    });
    document.querySelector('.countries').innerHTML = html;

}

function showcountry(element) {
    html += `<div onclick="show_detail(this.id)" id="${element.name.common}" class="country">
    <img id="flag" src="${element.flags.png}" alt="">
    <div class="about">
        <h1>${element.name.common}</h1>
        <p><span>Population</span> ${element.population}</p>
        <p id="${element.region}" class="region"><span>Region</span> ${element.region}</p>
        <p><span>Captial</span> ${element.capital}</p>
    </div>
    </div>`
}

getdata();
document.getElementById('search_txt').addEventListener("input", () => {
    let countryName = document.querySelectorAll('.country');
    let text = document.getElementById('search_txt').value.toLowerCase();
    countryName.forEach(function(element) {
        let idName = element.id;
        if (idName.toLowerCase().includes(text)) {
            document.getElementById(`${idName}`).style.display = "block";
        } else {
            document.getElementById(`${idName}`).style.display = "none";
        }
    });
});


function allshow() {
    let country = document.querySelectorAll('.country');
    country.forEach(element => {
        element.style.display = "block";
    });

}

function show(cntry) {
    let region = document.querySelectorAll('.region');
    showbyregion(region, cntry);

}
const showbyregion = (reg, cntry) => {
    for (let i = 0; i < reg.length; i++) {
        if (reg[i].innerText.toLowerCase().includes(cntry)) {
            reg[i].parentNode.parentNode.style.display = "block";
        } else {
            reg[i].parentNode.parentNode.style.display = "none"
        }
    };
};

async function show_detail(country) {
    document.querySelector('.main').style.display = "none";
    const data = await fetch('https://restcountries.com/v3.1/all');
    const objdata = await data.json();
    let temp, html = "";
    for (let i = 0; i < objdata.length; i++) {

        if (objdata[i].name.common == country) {
            let curren, lang, nativeName;
            for (val in objdata[i].currencies) {
                curren = objdata[i].currencies[val].name;
            }
            for (val in objdata[i].languages) {
                lang = objdata[i].languages[val];
            }
            for (val in objdata[i].name.nativeName) {
                nativeName = objdata[i].name.nativeName[val].official;
            }
            let element;

            if (objdata[i].borders != undefined) {
                objdata[i].borders.map((bor) => {
                    html += `<p class= border_buttom> ${bor} </p>`
                });
            }


            temp = `<div class="country_flag">
            <img src="${objdata[i].flags.png}" alt="">
        </div>
        <div class="details">
            <div class="details_heading">
                <h1>${objdata[i].name.common}</h1>
            </div>
            <div class="detail_upper">
                <div class="deatils_name">
                    <p><span>Native Name</span> ${nativeName}</p>
                    <p><span>Population</span> ${objdata[i].population}</p>
                    <p><span>Region</span> ${objdata[i].region}</p>
                    <p><span>Sub Region</span> ${objdata[i].subregion}</p>
                    <p><span>Captial</span> ${objdata[i].capital}</p>
                </div>
                <div class="deatils_currencies">
                    <p><span>Top Level Domain</span> ${objdata[i].tld}</p>
                    <p><span>Curriences</span> ${curren}</p>
                    <p><span>Language</span> ${lang}</p>
                </div>
            </div>
            <div class="detail_lower">
                <p>Border Countries </p>
                <div class="borders">
                </div>  
            </div>
        </div>`
            break;

        }

    }
    document.querySelector('.country_details').style.display = "none";
    document.querySelector('.country_details_main').innerHTML = temp;
    if (html != "") {
        document.querySelector('.borders').innerHTML = html;
    } else {
        document.querySelector('.detail_lower').style.display = "none";
    }

    document.querySelector('.country_details').style.display = "flex";
}

function back() {
    document.querySelector('.main').style.display = "block";
    document.querySelector('.country_details').style.display = "none";
}

function dark_mode() {
    document.querySelector('.dark_mode').style.display = "block";
    document.querySelector('.day_mode').style.display = "none";
    document.querySelector('.search_icon_dark').style.display = "block";
    document.querySelector('.search_icon_day').style.display = "none";
    document.querySelector(':root').style.setProperty("--bg-color", "white");
    document.querySelector(':root').style.setProperty("--nav-color", "white");
    document.querySelector(':root').style.setProperty("--font-color", "black");
    // document.querySelector(':root').style.setProperty("--nav-color", "white");

}

function day_mode() {
    document.querySelector('.dark_mode').style.display = "none";
    document.querySelector('.day_mode').style.display = "block";
    document.querySelector('.search_icon_dark').style.display = "none";
    document.querySelector('.search_icon_day').style.display = "block";
    document.querySelector(':root').style.setProperty("--bg-color", "hsl(207, 26%, 17%)");
    document.querySelector(':root').style.setProperty("--nav-color", "hsl(209, 23%, 22%)");
    document.querySelector(':root').style.setProperty("--font-color", "white");

}