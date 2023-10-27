// let commando = null;
// let todo = [];

// while(commando!=='q'){
    
//     if(commando==='new'){
//         let asktask = prompt("Okay , task?");
//         todo.unshift(asktask);
//         // console.log(asktask);
//     }
//     else if (commando==='del'){
//         todo.pop();
//     }
//     else if(commando==="list"){
//         for(let i=0;i<todo.length ;i++)
//         console.log(`${i}:${todo[i]}`);
// }

// commando = prompt("Hello , Wlcm in here. Do smth , or q to quit");


// }

// let x = [];

// document.querySelector('button').addEventListener('click',f)

// function f(){
// let x = Math.floor((Math.random()*255)+1);
// let y = Math.floor((Math.random()*255)+1);
// let z = Math.floor((Math.random()*255)+1);

// let col = `rgb(${x},${y},${z})`;
// console.log(x,y,z,col);
// document.querySelector('span').innerText = col;
// document.querySelector('body').style.backgroundColor = col;
// document.querySelector('button').style.color = col;

// }

// const p = new Promise((res,rej)=>{
//     let time = Math.floor(Math.random()*10 + 1);
//     if(time%2==0) res('ok yes');
//     else rej('why no');
// });
// p.then((y)=>console.log('yusss',y));
// p.catch((n)=>console.log('sa',n));

// const p = new Promise(
//     (res,rej)=>{
//         if(!true) res('ji');
//         else rej('o');
//     }
// )
// p.then(()=>console.log('hmmm'));
// p.catch(()=>console.log('polo'));

// let y = prompt();
// const f =  async (res,rej)=>{
// if(y%2==0){
//     let p =  new Promise((resolve)=>{
//         setTimeout(resolve,3000);
//     });
//     p.then(()=>console.log('opp'));
// } 
// else{
//     let p = await new Promise((resolve)=>{
//         setTimeout(resolve,1000);
//     });
//     console.log('!!!!!!!!!');

// }
// }
// f();

// console.log('ji');
// // console.log('ji');
// async function getData(i){ 
//  let resp = await (axios.get(`https://swapi.dev/api/people/${i}`));
//   console.log(resp.data);
//   console.log(i)    ;
// }
// for(let i=1;i<10;i++){
//  getData(i);
// }

// console.log('heinji');

let inp = document.querySelector('input');
let h1a = document.createElement('h1');
document.querySelector('body').insertAdjacentElement('afterbegin', h1a);
h1a.style.fontSize = '2em';
inp.style.borderColor = 'red';

inp.addEventListener('input', () => {
    h1a.innerText = inp.value;
});

let ul = document.querySelector('ul');

inp.addEventListener('input', () => {
    let inputValue = inp.value;
    
    // Clear the previous content of the UL
    ul.innerHTML = '';
    
    let x = axios.get(`https://api.tvmaze.com/search/shows?q=${inputValue}`);
    x.then((resp) => {
        let k = resp.data;
        for (let nm of k) {
            let newLi = document.createElement('li');
            newLi.textContent = nm.show.name;
            ul.appendChild(newLi);
        }
    });
});

String.prototype.hatt = ()=>{
    alert(`${this.value} is a nice no!`)
}