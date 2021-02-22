import React from "react";
import ReactDOM from "react-dom";

// function UserItem({ name, age }) {
//   return (
//     <li>
//       <h3>Name: {name}</h3>
//       <h3>Age: {age}</h3>
//     </li>
//   );
// }

function UserItemExpanded({ fullname, address, age, height, spokenLanguages }) {
  return (
    <>
      <li>
        <h3>Name: {fullname}</h3>
        <h3>Address: {address}</h3>
        <h3>Age: {age}</h3>
        <h3>Height: {height}</h3>
        <h3>
          Spoken languages:
          <ul>
            {spokenLanguages.map((language) => (
              <li>{language}</li>
            ))}
          </ul>
        </h3>
      </li>
    </>
  );
}

function UserList(props) {
  return (
    <ul>
      {props.users.map((user) => {
        return (
          <UserItemExpanded
            fullname={user.fullname}
            address={user.address}
            age={user.age}
            height={user.height}
            spokenLanguages={user.spokenLanguages}
          />
        );
      })}
    </ul>
  );
}

// const users = [
//   {
//     id: 0,
//     name: "Benjamin",
//     age: 32,
//   },
//   {
//     id: 1,
//     name: "Peter",
//     age: 43,
//   },
// ];

const users = [
  {
    fullname: "testy mc testy face",
    adress: "test alley",
    age: 35,
    height: 185,
    spokenLanguages: ["danish", "arabic"],
  },
  {
    fullname: "Ahmad Hansen",
    adress: "test alley 2",
    age: 89,
    height: 167,
    spokenLanguages: ["english", "polish"],
  },
  {
    fullname: "Peter Petersen",
    adress: "alley 2",
    age: 19,
    height: 176,
    spokenLanguages: ["english", "danish"],
  },
];

ReactDOM.render(<UserList users={users} />, document.getElementById("root"));

/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
