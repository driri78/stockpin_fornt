import React from "react";
import { IoFilter } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { KoreaFlag } from "@/assets/images/Image";
const FilterElement = () => {
  return (
    <nav className="filter_list_container">
      <ul>
        <li>
          <button>
            <div className="filter_icon_box">
              <IoFilter />
            </div>
            <span>필터 추가</span>
          </button>
          <div></div>
        </li>
        <li>
          <button>
            <div className="filter_info_box">
              <div className="flag_img_box">
                <KoreaFlag />
              </div>
              <span>국내</span>
            </div>
            <div className="arrow_down_img_box">
              <MdKeyboardArrowDown />
            </div>
          </button>
          <div></div>
        </li>
        <li>
          <button>
            <span>카테고리</span>
            <div className="arrow_down_img_box">
              <MdKeyboardArrowDown />
            </div>
          </button>
        </li>
        <li>
          <button>
            <span>시가총액</span>
            <div className="arrow_down_img_box">
              <MdKeyboardArrowDown />
            </div>
          </button>
        </li>
        <li>
          <button>
            <span>거래량</span>
            <div className="arrow_down_img_box">
              <MdKeyboardArrowDown />
            </div>
          </button>
        </li>
        <li>
          <button>
            <span>주가 등락률</span>
            <div className="arrow_down_img_box">
              <MdKeyboardArrowDown />
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default FilterElement;
