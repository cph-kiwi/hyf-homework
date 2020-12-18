// Using async await fetch yes or no from this api: https://yesno.wtf/api. log out the answer

const url = "https://yesno.wtf/api";

async function fetchYesNo() {

let promise = fetch(url).then((response) => ).then().catch();




    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
    alert(result); // "done!"
  }
  
  fetchYesNo();

