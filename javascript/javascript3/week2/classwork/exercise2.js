// Using promises
// 1. fetch yes or no from this api: https://yesno.wtf/api. log out the answer
// 2. Try fetching a url that rejects fx https://knajskdskj.jasdk. Log out the error message

const yesNoUrl = "https://yesno.wtf/api";
const rejectUrl = "https://knajskdskj.jasdk";

function logYesNo(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(data.answer);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

logYesNo(yesNoUrl);

/*
// a promise is an object, something like this...
  const p = {
      _state:"pending", // hidden
      _callbacksSuccess:[], // hidden
      _callbacksFail:[], // hidden
      then:(callback) =>  this.callbacksSuccess.push(callback)
      catch:(callback) =>  this.callbacksFail.push(callback)
  }

function resolve(value) {
  p._state = "resolved"
  p.callbacksSuccess.forEach(callback => callback(value))
}

function reject(value) {
    p._state = "reject"
    p.callbacksFail.forEach(callback => callback(value))
}
*/

/*
fetch(url).then(someFunction); // fetch returns a promise and 'then' takes a callback
document.addEventListener("click", someFunction); // a type of callback
setTimeout(someFunction, 300); // call this function after 'duration'
*/
