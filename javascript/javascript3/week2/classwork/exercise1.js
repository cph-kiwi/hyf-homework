// Using async await fetch yes or no from this api: https://yesno.wtf/api. log out the answer
// this was useful - https://dev.to/shoupn/javascript-fetch-api-and-using-asyncawait-47mp

const url = "https://yesno.wtf/api";

async function logYesNo() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.answer);
  } catch (err) {
    console.log(err.message);
  }
}

logYesNo();
