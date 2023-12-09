// let balb = document.querySelector('#balb');


// balb.addEventListener('click', function() {
//     balb.style.backgroundColor = 'red';
// });

// lowG = () => {
//     console.log(69);
// }

// function topG() {
//     setTimeout(() => {
//         console.log(1);
//         setTimeout(() => {
//             console.log(2);

//             setTimeout(() => {
//                 console.log(3);
//                 // lowG();
//             }, 2000);

//             console.log(4);
//         }, 1000);
//         console.log(5);
//     }, 1000);

//     console.log(6);
// }


// topG();

// let y = 10;

// let p1 = new Promise(
//     function(resolve, reject) {
//         if (y > 5) resolve(`bro my data is = ${y}`);
//         else reject('srry , data');
//     }
// )
// p1.then((val) => {
//     console.log("here ya gaa! ,", val);
//     return new Pro
// }, (err) => { console.log('surrrrryyyyy ', err) });

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
        for (let i = 1; i < 6; i++) {
            let val = Math.floor(Math.random() * 10)
            document.getElementById(`c${i}`).style.order = val;
        }

        let no = (Math.floor(Math.random() * 5)) + 1
            // console.log(no);
            // document.getElementsByClassName('colorful').style.backgroundColor = 'rgb(43,43,43)';
        for (let i = 1; i <= no; i++) {
            // console.log(i);
            let selected = document.getElementById(`c${i}`);
            selected.classList.toggle(`colorful${i}`);
            // selected.classList.toggle('colorful2');
        }


    }



)