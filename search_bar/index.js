let elem = document.getElementsByClassName('table_txt');
document.getElementById('search_txt').addEventListener('input', function() {
    let get_txt = document.getElementById('search_txt').value;
    // console.log(get_txt);
    Array.from(elem).forEach(function(element) {
        let dis_table = element.getElementsByTagName('td')[2].textContent;
        if (dis_table.includes(get_txt)) {
            element.style.display = "";
        } else {
            element.style.display = 'none';
        }

    })
})

// console.log(elem);