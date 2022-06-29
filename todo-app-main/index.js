let count = 1;
let notes = [];
let chk_height = 66;
let notes2 = [];
let complete_count = 0;
let html2 = "";
let html = "";

function clear() {
    localStorage.clear();
}


/* adding input value in task section start*/
function addtobox() {
    let gettext = document.querySelector('.write_text').value;
    let store_note = JSON.parse(localStorage.getItem('added_notes'));
    if (store_note == null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem('added_notes'));
    }
    if (gettext == "") {
        alert('Add Work');
    } else {
        notes.push(gettext);
        document.querySelector('.write_text').value = "";
        localStorage.setItem('added_notes', JSON.stringify(notes));
        show();
    }
}

/* Spearting complted task start*/



function checkbox(p) {
    let check_boc_update = document.getElementsByClassName('check_box')[p];
    check_boc_update.classList.add('checked');
    check_boc_update.classList.add('completed');
    check_boc_update.parentElement.classList.add('cross-text');
    complete_count = complete_count + 1;
    document.querySelector('.itemleft').innerHTML = `${notes.length-complete_count} items left`;

    let completed_notes = JSON.parse(localStorage.getItem('completed'));
    if (completed_notes == null) {
        notes2 = [];
    } else {
        notes2 = JSON.parse(localStorage.getItem('completed'));
    }
    notes2.push(JSON.parse(localStorage.getItem('added_notes'))[p - 1]);
    localStorage.setItem('completed', JSON.stringify(notes2));
    del(p - 1);

    html2 = "";
    notes2.forEach(function(element, index) {
        html2 += `
            <div class="check cross-text">
                <div class="check_box checked">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
                    </div>
                <p>${element}</p>
                <div id="${index}" onclick="delcom(this.id)" class="cross ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                </div>
            </div>`
    });
    document.querySelector('.mainbody').innerHTML = html2 + html;
}


/* Spearting complted task End*/

function show() {

    let arr = [];
    let store_note = JSON.parse(localStorage.getItem('added_notes'));
    if (store_note == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem('added_notes'));
    }
    html = "";
    arr.forEach(function(element, index) {
        html += `
        <div class="check ">
            <div onclick="checkbox('${index+1}')" class="check_box ">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
                </div>
            <p >${element}</p>
            <div id="${index}" onclick="del(this.id)" class="cross ">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
            </div>
        </div>`


    });
    document.querySelector('.itemleft').innerHTML = `${notes.length} items left`;
    document.querySelector('.mainbody').innerHTML = html2 + html;
}

/* adding input value in task section END*/

/*del function for non-completed atsk and completed task start*/

function del(index) {
    notes.splice(index, 1);
    localStorage.setItem('added_notes', JSON.stringify(notes));
    show();
}

function delcom(index) {
    notes2.splice(index, 1);
    localStorage.setItem('completed', JSON.stringify(notes2));
    html2 = "";
    notes2.forEach(function(element, index) {
        html2 += `
            <div class="check cross-text">
                <div class="check_box checked">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
                    </div>
                <p>${element}</p>
                <div id="${index}" onclick="delcom(this.id)" class="cross ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
                </div>
            </div>`
    });
    document.querySelector('.itemleft').innerHTML = `${notes.length} items left`;
    document.querySelector('.mainbody').innerHTML = html2 + html;
}

/*del function for non-completed atsk and completed task End*/

function all_show() {
    document.querySelector('.active').classList.remove('font_bold');
    document.querySelector('.all').classList.add('font_bold');
    document.querySelector('.completed').classList.remove('font_bold');
    document.querySelector('.mainbody').innerHTML = html2 + html;
}

function active() {
    document.querySelector('.all').classList.remove('font_bold');
    document.querySelector('.active').classList.add('font_bold');
    document.querySelector('.completed').classList.remove('font_bold');
    document.querySelector('.mainbody').innerHTML = html;
}

function completed() {
    document.querySelector('.all').classList.remove('font_bold');
    document.querySelector('.active').classList.remove('font_bold');
    document.querySelector('.completed').classList.add('font_bold');
    document.querySelector('.mainbody').innerHTML = html2;
}

function clear_complete() {
    localStorage.removeItem('completed');
    html2 = "";
    all_show();
}


/*Day night mode start */


function daymode() {
    // document.querySelector('.sun').classList.toggle('day_mode')
    document.querySelector('.sun').style.display = "none";
    document.querySelector('.moon').style.display = "block";
    document.querySelector(':root').style.setProperty("--change-background", "url('./images/bg-desktop-light.jpg')");
    document.querySelector('body').style.backgroundColor = "white"
    document.querySelector('.write_todo').style.backgroundColor = "white"
    document.querySelector('.write_text').style.backgroundColor = "white"
    document.querySelector('.last_row').style.backgroundColor = "white"
    document.querySelector('.write_text').style.color = " hsl(233, 14%, 35%)"
    document.querySelector('.mainbody').style.backgroundColor = "white"
    document.querySelector(':root').style.setProperty("--font-color", "hsl(235, 19%, 35%)");

}

function nightmode() {
    // document.querySelector('.sun').classList.toggle('day_mode');
    document.querySelector('.sun').style.display = "block";
    document.querySelector('.moon').style.display = "none";
    document.querySelector(':root').style.setProperty("--change-background", "url('./images/bg-desktop-dark.jpg')");
    document.querySelector('body').style.backgroundColor = "hsl(235, 21%, 11%)"
    document.querySelector('.write_todo').style.backgroundColor = "hsl(235, 24%, 19%)"
    document.querySelector('.write_text').style.backgroundColor = "hsl(235, 24%, 19%)"
    document.querySelector('.last_row').style.backgroundColor = "hsl(235, 24%, 19%)"
    document.querySelector('.write_text').style.color = " hsl(236, 33%, 92%)"
    document.querySelector('.mainbody').style.backgroundColor = "hsl(235, 21%, 11%)"
    document.querySelector(':root').style.setProperty("--font-color", "hsl(236, 33%, 92%)");


}