document.querySelector('.opennav').addEventListener("click", () => {
    document.querySelector('.hidden').classList.add("active");
});
document.querySelector('.close').addEventListener("click", () => {
    document.querySelector('.hidden').classList.remove("active");
});
let i = 0;
let arr = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"];
document.querySelector('.leftmove').addEventListener("click", () => {
    if (i == 0) {
        i = 3;
        document.getElementById('image').src = arr[i];

    } else {

        i--;
        document.getElementById('image').src = arr[i];
    }

});
document.querySelector('.rightmove').addEventListener("click", () => {
    if (i === 3) {
        i = 0;
        document.getElementById('image').src = arr[i];

    } else {

        i++;
        document.getElementById('image').src = arr[i];

    }
});

let arr1 = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"];

let j = 0;
document.querySelector('.next').addEventListener("click", () => {

    if (j == 0) {
        j = 3;
        document.getElementById('image').src = arr1[j];

    } else {
        j--;
        document.getElementById('image').src = arr1[j];

    }
});
document.querySelector('.prev').addEventListener("click", () => {
    if (j === 3) {
        j = 0;
        document.getElementById('image').src = arr1[j];

    } else {
        j++;
        document.getElementById('image').src = arr1[j];

    }

});

function product1() {
    document.getElementById('image').src = arr1[0];
    document.getElementById('image2').src = arr1[0];
}

function product2() {
    document.getElementById('image').src = arr1[1];
    document.getElementById('image2').src = arr1[1];
}

function product3() {
    document.getElementById('image').src = arr1[2];
    document.getElementById('image2').src = arr1[2];
}

function product4() {
    document.getElementById('image').src = arr1[3];
    document.getElementById('image2').src = arr1[3];
}

function show_img() {
    document.querySelector('.show_img').style.display = "block";
}

function close_show_img() {

    document.querySelector('.show_img').style.display = "none";
}

document.getElementById('show_cart_list').addEventListener("click", () => {
    document.querySelector('.cart_show').classList.toggle("cart_show_active");
});

function show_cart_detail() {
    document.querySelector('.cart_show').classList.add("cart_show_active");

    if (Number(document.querySelector('.quan').innerHTML) === 0) {
        document.querySelector('.pro_details').style.display = "none";
        document.querySelector('.buttom').style.display = "none";
        document.querySelector('.empty_cart').style.display = "block";
        document.querySelector('.show_cart_quan').style.display = "none";
    } else {
        document.querySelector('.show_cart_quan').style.display = "flex";
        document.getElementById('total_quantity').innerHTML = document.querySelector('.quan').innerHTML;
        document.getElementById('pro_quan').innerHTML = document.querySelector('.quan').innerHTML;
        document.getElementById('total_price').innerHTML = '$' + Number(document.getElementById('price').innerHTML) * Number(document.querySelector('.quan').innerHTML);
        document.querySelector('.pro_details').style.display = "flex";
        document.querySelector('.buttom').style.display = "flex";
        document.querySelector('.empty_cart').style.display = "none";
    }
}

function increase_pro() {
    document.querySelector('.quan').innerHTML = Number(document.querySelector('.quan').innerHTML) + 1;
}

function decrease_pro() {
    if (Number(document.querySelector('.quan').innerHTML) === 1) {} else {
        document.querySelector('.quan').innerHTML = Number(document.querySelector('.quan').innerHTML) - 1;
    }
}

function deletecart() {
    document.querySelector('.quan').innerHTML = '0';
    document.querySelector('.pro_details').style.display = "none";
    document.querySelector('.buttom').style.display = "none";
    document.querySelector('.empty_cart').style.display = "block";
    show_cart_detail()
}

function show_img_border() {
    document.querySelector('.img').classList.add("img_active");
}

function remove_img_border() {
    document.querySelector('.img').classList.remove("img_active");
}
show_cart_detail()