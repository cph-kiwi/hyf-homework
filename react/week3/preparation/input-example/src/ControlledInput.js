import React, { useState } from "react";

const ControlledInput = (props) => {
  const [nameState, setName] = useState("");
  const [ageState, setAge] = useState(0);

  const onChangeName = (event) => {
    setName(event.target.value);
    console.log(nameState);
  };

  const onChangeAge = (event) => {
    setAge(event.target.value);
    console.log(ageState);
  };

  return (
    <div>
      Name: <input type="text" value={nameState} onChange={onChangeName} />
      <br />
      Age: <input type="text" value={ageState} onChange={onChangeAge} />
    </div>
  );
};

export default ControlledInput;
