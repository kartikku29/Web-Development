shownotes();

document.getElementById("add_note").addEventListener('click', function(e) {
    let store_note = JSON.parse(localStorage.getItem('added_notes'));
    let txt_note = document.getElementById('notes_write')
    let title_note = document.getElementById('title_notes_write');
    if (store_note == null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem('added_notes'));
    }
    let obj = {
        title: title_note.value,
        txt: txt_note.value
    }
    if (txt_note.value == "") {
        alert("Note is Blank");
    }
    if (title_note.value == "") {
        alert("Title is Blank");
    } else {
        notes.push(obj);
        console.log(notes);
        txt_note.value = ""
        title_note.value = ""
        localStorage.setItem('added_notes', JSON.stringify(notes));
        shownotes();
    }
});

function shownotes() {
    let store_note = JSON.parse(localStorage.getItem('added_notes'));
    if (store_note == null) {
        notes = [];
    } else {
        notes = JSON.parse(localStorage.getItem('added_notes'));
    }
    let html = ""
    notes.forEach(function(element, index) {
        html += `
        <div class="inner_note_store">
            <p>Note ${index+1}</p>
            <p>Title</p>
            <textarea class="title_note_write" id="notes_write">${element.title}</textarea>
            <p>Add a Note</p>
            <textarea class="inner_note_write">${element.txt}</textarea>
            <button id="${index}" onclick="del(this.id)" >Delete note</button>
        </div>
        `
    });
    let el = document.getElementById('store');
    el.innerHTML = html;
}

function del(index) {
    notes.splice(index, 1);
    localStorage.setItem('added_notes', JSON.stringify(notes));
    shownotes();
}

// search start here


let searchtxt = document.getElementById('search_txt');
searchtxt.addEventListener('input', function() {
    let val = searchtxt.value.toLowerCase();
    // console.log(val);
    let note_store = document.getElementsByClassName('inner_note_store');
    Array.from(note_store).forEach(function(element) {
        let temp = element.getElementsByClassName('inner_note_write')[0].textContent;
        // console.log(temp);
        if (temp.includes(val)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    })
})