import { Check } from "@/assets/images/Image";
import React from "react";

const AgreementCheckbox = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <div className="item">
          <label className="check_img_box" htmlFor={item.id}>
            <Check />
          </label>
          <input type="checkbox" id={item.id} />
          <label htmlFor={item.id}>{item.text}</label>
        </div>
      ))}
    </>
  );
};

export default AgreementCheckbox;
