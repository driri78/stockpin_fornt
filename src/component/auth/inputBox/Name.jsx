import React, { useState } from "react";

const Name = () => {
  const [name, setName] = useState("");
  const validName = (e) => {
    let input = e.target.value;
    if (input.length <= 10) {
      setName(input);
    }
  };

  return (
    <div className="name_box">
      <div className="essential_input">
        <input
          className="text"
          type="text"
          placeholder="이름"
          value={name}
          onChange={validName}
        />
      </div>
    </div>
  );
};

export default Name;
