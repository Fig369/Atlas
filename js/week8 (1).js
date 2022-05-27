function promise1() {

    return new Promise((resolve, reject) => {

    resolve();
    })
};


promise1()
.then(() => { console.log('success') })
.catch(() => { console.log('there was an error')})


function promise2(errorBoolean) {
    return new Promise((resolve, reject) => {
        if(errorBoolean) {
            reject('There was an error');
        } else {
            resolve('Your data you asked for.');
        }
    })
}

promise2(true)
  .then(data => {console.log(data)})
  .catch(err => {console.log(err)})

promise2(false)
  .then(data => {console.log(data)})
  .catch(err => {console.log(err)})

const promise3 = new Promise((resolve, reject) => { resolve('promise 3 complete') });
const promise4 = new Promise((resolve, reject) => { resolve('Promise 4 complete') });
const promise5 = new Promise((resolve, reject) => { resolve('promise 5 complete') });



Promise.all([promise3, promise4, promise5])
.then(data => { console.log(data) })
.catch(err => { console.log(err) })


const newLink = "random"

let random = encodeURI(newLink)

let url = `http://api.icndb.com/jokes/${random}`;


let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onload = function () {
	const joke = JSON.parse(this.responseText).value.joke;
	console.log(joke);
};

xhr.send()


const norrisJ = 'http://api.icndb.com/jokes/random';
const jRandom = new URL('random', norrisJ);
const urlUrl = new URL('Web/API/URL', jRandom);

console.log(jRandom.toString())

let xhr2 = new XMLHttpRequest();
xhr2.open('GET', jRandom, true);

xhr2.onload = function () {
	const joke = JSON.parse(this.responseText).value.joke;
	console.log(joke);
};

xhr2.send()