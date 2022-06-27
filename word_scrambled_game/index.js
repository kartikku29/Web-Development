let start = false;
document.querySelector('.play_btn').addEventListener('click', function() {

    document.querySelector('.sec').classList.toggle('hidden');
    document.querySelector('.choose').classList.remove('hidden');

})

let createNewWord = (...arr) => {
    let random = Math.floor(Math.random() * arr.length);
    return arr[random];

}

let createJumbleWord = (...arr2) => {
    for (let i = arr2.length - 1; i > 0; i--) {
        let temp = arr2[i];
        let j = Math.floor(Math.random() * (i + 1));
        arr2[i] = arr2[j];
        arr2[j] = temp;
    }
    return arr2;
}
let score = 0;
let highscore = 0;
let newWord = "";
let tempnewWords = "";
let jumbleWord = "";
let guess = "";
let choose_topic = "";

function language() {
    guess = document.querySelector('.input_btn').value = "";
    document.querySelector('.choose').classList.add('hidden2');
    document.querySelector('.gameplay').classList.remove('hidden');
    let words = ["java", "javaScript", "python", "php", "c++", "android", "css", "shell", "ruby", "swift", "sql"];
    newWord = createNewWord(...words);
    tempnewWords = newWord.split("");
    jumbleWord = createJumbleWord(...tempnewWords).join("");
    document.querySelector('.game_word').innerHTML = jumbleWord;
    choose_topic = "language";


}

function places() {
    guess = document.querySelector('.input_btn').value = "";
    document.querySelector('.choose').classList.add('hidden2');
    document.querySelector('.gameplay').classList.remove('hidden');
    let words = ["delhi", "mumbai", "bihar", "newyork", "america", "london", "tamilnadu", "chennai", "punjab", "australia", "india", "austria", "kolkata", "asansol"];
    newWord = createNewWord(...words);
    tempnewWords = newWord.split("");
    jumbleWord = createJumbleWord(...tempnewWords).join("");
    document.querySelector('.game_word').innerHTML = jumbleWord;
    choose_topic = "place";
}

function animal() {
    guess = document.querySelector('.input_btn').value = "";
    document.querySelector('.choose').classList.add('hidden2');
    document.querySelector('.gameplay').classList.remove('hidden');
    let words = ["tiger", "kangaroo", "gorilla", "dog", "cat", "elephant", "leopard", "wolf", "horse", "zebra", "deer", "rabbit", "panda", "camel", "lion", "sheep", "monkey", "rhinoceros"];
    newWord = createNewWord(...words);
    tempnewWords = newWord.split("");
    jumbleWord = createJumbleWord(...tempnewWords).join("");
    document.querySelector('.game_word').innerHTML = jumbleWord;
    choose_topic = "animal";
}

function fruits() {
    guess = document.querySelector('.input_btn').value = "";
    document.querySelector('.choose').classList.add('hidden2');
    document.querySelector('.gameplay').classList.remove('hidden');
    let words = ["orange", "apple", "avocado", "mango", "cherry", "grape", "banana", "lemon", "watermelon", "lychee", "papaya", "pomogranate", "coconut", "jamun", "pineapple"];
    newWord = createNewWord(...words);
    tempnewWords = newWord.split("");
    jumbleWord = createJumbleWord(...tempnewWords).join("");
    document.querySelector('.game_word').innerHTML = jumbleWord;
    choose_topic = "fruit";
}

function vegetables() {
    guess = document.querySelector('.input_btn').value = "";
    document.querySelector('.choose').classList.add('hidden2');
    document.querySelector('.gameplay').classList.remove('hidden');
    let words = ["avocado", "broccoli", "cauliflower", "pea ", "pepper", "tomato", "potato", "onion", "ladyfinger", "carrot", "sweet potato ", "garlic", "cucumbers", "beans", "mushrooms", "pumpkin"];
    newWord = createNewWord(...words);
    tempnewWords = newWord.split("");
    jumbleWord = createJumbleWord(...tempnewWords).join("");
    document.querySelector('.game_word').innerHTML = jumbleWord;
    choose_topic = "vegetable";
}
document.querySelector('.submit_btn').addEventListener("click", function() {
    guess = document.querySelector('.input_btn').value;
    if (guess == "") {
        alert('Enter Something');
    } else {
        if (guess === newWord) {
            score = score + 1;
            document.querySelector('.score').innerHTML = score;
            if (highscore <= score) {
                highscore = score;
                document.querySelector('.highscore').innerHTML = highscore
            }
            if (choose_topic === "language") {
                language();
            }
            if (choose_topic === "place") {
                places();
            }
            if (choose_topic === "vegetable") {
                vegetables();
            }
            if (choose_topic === "fruit") {
                fruits();
            }
            if (choose_topic === "animal") {
                animal();
            }

        } else if (guess !== newWord) {
            document.querySelector('.input_btn').style.display = "none";
            document.querySelector('.game_word').innerHTML = `You Score ${score}`;

            document.querySelector('.submit_btn').style.display = "none";
            document.querySelector('.play_again_btn').style.display = "block";

        }
    }
});


document.querySelector('.play_again_btn').addEventListener("click", function() {
    document.querySelector('.gameplay').classList.add('hidden');
    document.querySelector('.choose').classList.remove('hidden2');
    document.querySelector('.play_again_btn').style.display = "none";
    document.querySelector('.submit_btn').style.display = "block";
    score = 0;
    document.querySelector('.score').innerHTML = score;
    document.querySelector('.input_btn').style.display = "block";
    document.querySelector('.submit_btn').value = "Guess";
});