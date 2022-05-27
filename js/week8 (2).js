//1//
function promise1() {
    //------2-------// //-----3------//
    return new Promise((resolve, reject) => {
    //4//
    resolve();
    })
};

//--5--//
promise1()   //--------------6------------------//
.then(() => { console.log('success') })
.catch(() => { console.log('there was an error')})

//-----------7--------------//
function promise2(errorBoolean) {
    return new Promise((resolve, reject) => {
        //------8------//
        if(errorBoolean) {
        //------------------9-------------------//
            reject('There was an error');
        } else {
            resolve('Your data you asked for.');
        }
    })
}

//--------------10----------------//
promise2(true)
  .then(data => {console.log(data)})
  .catch(err => {console.log(err)})

promise2(false)
  .then(data => {console.log(data)})
  .catch(err => {console.log(err)})

//---------------------------------------11----------------------------------------//
const promise3 = new Promise((resolve, reject) => { resolve('promise 3 complete') });

//--------------------------------------------12---------------------------------------------//
/* const promise4 = new Promise((resolve, reject) => { reject('There was an error w/ promise 4')}); */

////---------------------------------------16----------------------------------------////
const promise4 = new Promise((resolve, reject) => { resolve('Promise 4 complete') });

//---------------------------------------13----------------------------------------//
const promise5 = new Promise((resolve, reject) => { resolve('promise 5 complete') });
/* console.log(promise5) */


//--------------14----------------//
/* promise3
.then(data => { console.log(data) })
.catch(err => { console.log(err) }) */

//--------------15----------------//
////--------------17----------------////
Promise.all([promise3, promise4, promise5])
.then(data => { console.log(data) })
.catch(err => { console.log(err) })


//----------18 & Bonus Attempt Below------------//

let xhr = new XMLHttpRequest();
let xhr1 = new XMLHttpRequest();
let xhr2 = new XMLHttpRequest();
let xhr3 = new XMLHttpRequest();
let xhr4 = new XMLHttpRequest();
let xhr5 = new XMLHttpRequest();

//---^^ All My XMLH Request ^^----//

let x = [Math.floor(Math.random() * 549)];

const norrisJoke = 'http://api.icndb.com/jokes/15';
const jRandom = new URL('random', norrisJoke);
const j369 = new URL('369', norrisJoke);
const jX = new URL(x ,j369)
const newLink = "random"


let random = encodeURI(newLink)
let url = `http://api.icndb.com/jokes/${random}`;


//---^^ All of my Variables ^^----//


xhr.open('GET', 'http://api.icndb.com/jokes/15', true);
xhr.onload = function () {
	const joke = JSON.parse(this.responseText).value.joke;
	console.log(joke);
};
xhr.send();

//---------^^^ Joke ID #15 ^^^-----------//

xhr1.open('GET', url, true);
xhr1.onload = function () {
	const joke = JSON.parse(this.responseText).value.joke;
	console.log(joke);
};
xhr1.send()

//---------^^^ Joke URL "Random" ^^^-----------//

xhr2.open('GET', norrisJoke, true);
xhr2.onload = function () {
	const joke = JSON.parse(this.responseText).value.joke;
	console.log(joke);
};
xhr2.send()

//---------^^^ Joke URL "Random" ^^^-----------//

xhr3.open('GET', j369, true);
xhr3.onload = function () {
	const joke = JSON.parse(this.responseText).value.joke;
	console.log(joke);
};
xhr3.send()

//---------^^^  Joke No. 369  ^^^-----------//

xhr4.open('GET', jX, true);
xhr4.onload = function () {
	const joke = JSON.parse(this.responseText).value.joke;
	console.log(joke);
};
xhr4.send()

//---------^^^  Joke No. 69  ^^^-----------//

xhr5.open('GET', jRandom, true);
xhr5.onload = function () {
	const joke = JSON.parse(this.responseText).value.joke;
	console.log(joke);
};
xhr5.send()

//---------^^^  Joke jRandom URL ^^^-----------//

this.fin = x
console.log(this.fin)