import React, { forwardRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const domains = [
  {
    id: "1",
    name: "naver.com",
  },
  {
    id: "2",
    name: "gmail.com",
  },
  {
    id: "3",
    name: "daum.net",
  },
  {
    id: "4",
    name: "hanmail.net",
  },
  {
    id: "5",
    name: "icloud.com",
  },
  {
    id: "6",
    name: "outlook.com",
  },
  {
    id: "7",
    name: "직접입력",
  },
];

const Email = forwardRef(({ select, setSelect }, ref) => {
  const [show, setShow] = useState(false);
  const [email, setEamil] = useState("");
  const [afterDomain, setAfterDomain] = useState("");

  const domainSelect = (e) => {
    if (e.target.innerText === "직접입력") {
      setAfterDomain("");
      setShow(true);
    } else {
      setShow(true);
      setAfterDomain(e.target.innerText);
    }
  };

  return (
    <div className="email_box">
      <div className="essential_input input_box">
        <input
          className="text"
          type="text"
          placeholder="이메일"
          title={email}
          value={email}
          onChange={(e) => setEamil(e.target.value)}
          maxLength={254 - afterDomain.length}
        />
      </div>
      <div>
        <span>@</span>
      </div>
      <div
        ref={ref}
        className="select_box essential_input"
        onClick={() => setSelect(!select)}
      >
        <div className={show ? "default" : "default show"}>
          <span className="text">선택</span>
          <IoIosArrowDown />
        </div>
        <div className={show ? "direct show" : "direct"}>
          <input
            className="text"
            type="text"
            placeholder={"직접 입력"}
            title={afterDomain}
            value={afterDomain}
            onChange={(e) => setAfterDomain(e.target.value)}
            maxLength={254 - email.length}
          />
        </div>
        <ul className={select ? "active" : ""}>
          {domains.map((domain) => (
            <li key={domain.id} onClick={domainSelect}>
              {domain.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default Email;
