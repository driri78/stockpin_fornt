import { Check } from "@/assets/images/Image";
import React, { useState } from "react";

const AgreementCheckbox = ({ data }) => {
  const [checkedItems, setCheckedItems] = useState(() => {
    const initChecked = {};
    data.forEach((item) => {
      initChecked[item.id] = false;
    });
    return initChecked;
  });

  const handleCheck = (id) => {
    let newState = {};
    let checked = !checkedItems[id];
    if (id === "all") {
      data.forEach((item) => {
        newState[item.id] = checked;
      });
    } else {
      newState = { ...checkedItems };
      newState[id] = checked;
    }
    setCheckedItems(newState);
  };
  return (
    <>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <label className="check_img_box" htmlFor={item.id}>
            <Check />
          </label>
          <input
            type="checkbox"
            id={item.id}
            checked={checkedItems[item.id]}
            onChange={() => handleCheck(item.id)}
          />
          <label htmlFor={item.id}>{item.text}</label>
        </div>
      ))}
    </>
  );
};

export default AgreementCheckbox;
