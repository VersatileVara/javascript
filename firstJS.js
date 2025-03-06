// console.log("Welcome!!! Vara");
// alert("Welcome");

// let num = 50
// if (num % 2 == 0) {
//     console.log(num, 'is even');
// } else {
//     console.log("The number is odd");
// }

/* let num = prompt("enter ")
if (num %5 == 0) {
    console.log(num, 'is divisible by 5');
} else {
    console.log(num, ' is not divisible by 5');
}
 */

/* let names = ['Vara','Sara','Tara','Mara'];

for(let value of names){
console.log(value.toUpperCase())} */



/* let marks = [85, 97,44, 67, 60 ];
let marks_avg = 0;
for(let i=0; i<marks.length; i++){
    marks_avg += marks[i];
    }
marks_avg=marks_avg/marks.length;
console.log(marks_avg) */


// let items = [250, 645, 300, 900, 50];

// let offer_price = items.map(value => value*0.9)

// console.log(items);
// console.log(offer_price);
/* 
function vowels_word (word){
    let count = 0;
    let vowels = 'aeoiuAEIOU';

    for(let  char of word ) {
        if(vowels.includes(char)) {
        console.log(char);
        count++;
        }
    }
    return count;
}

console.log(vowels_word('Hello Vara!!!')); */
/* let h2 = document.querySelector("h2");
h2.innerText = h2.innerText+ " from Apna Coll";
console.dir(h2.innerText);

let divs = document.querySelectorAll(".box");
i = 1
for (let div of divs) {
    div.innerText = div.innerText + i;
    i++;
}
// console.dir(divs); */

/* let newBtn = document.createElement('button');

newBtn.innerText = 'Click Me';
newBtn.style.backgroundColor = "Red";
newBtn.style.color = "white";

document.body.prepend(newBtn); */

/* let btn1 = document.createElement('button');
document.body.append(btn1);
btn1.innerText = 'Toogle';
let mode = "light";

btn1.addEventListener('click', () => {
    if (mode === "light") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        mode = "dark";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        mode = "light";
    }
});
 */
