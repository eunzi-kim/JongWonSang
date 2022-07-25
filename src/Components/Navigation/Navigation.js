import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import ActiveCategory from "../../Redux/Actions/MainAction";
// import { RootState } from "../../Redux/Reducers";

import { Dropdown } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

import "./Navigation.css";

function Navigation() {
  const mainCategory = useSelector((state) => state.MainReducer);
  const dispatch = useDispatch();

  // 제목 누르면 메인화면으로 가기
  const onClickTitle = () => {
    dispatch(ActiveCategory("main"));
    window.location.href = "/";
  };

  // 클릭 => 1. Redux에 담기 2. 링크 이동
  const onClickCategory = (x) => {
    dispatch(ActiveCategory(x));
    if (x === "k-league-1") {
      window.location.href = "/k-league/1";
    } else if (x === "k-league-2") {
      window.location.href = "/k-league/2";
    } else {
      window.location.href = `/${x}`;
    }
  };

  // 카테고리 활성화 표시
  const showChkCategory = (category) => {
    if (document.querySelector(".nav-title-activate")) {
      document
        .querySelector(".nav-title-activate")
        .classList.remove("nav-title-activate");
    }
    if (category !== "main") {
      document
        .querySelector(`.${category}`)
        .classList.add("nav-title-activate");
    }
  };

  useEffect(() => {
    showChkCategory(mainCategory);
  }, [mainCategory]);

  return (
    <div className="navigation">
      <div className="title">
        <h1 onClick={onClickTitle}>Jong Won Sang</h1>
      </div>

      <div className="nav-m">
        <Dropdown>
          <Dropdown.Toggle variant="white" id="nav-dropdown-basic">
            <GiHamburgerMenu size="2rem" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => onClickCategory("k-league-1")}>
              K League 1
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onClickCategory("k-league-2")}>
              K League 2
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onClickCategory("my-team")}>
              My Team
            </Dropdown.Item>
            <Dropdown.Item onClick={() => onClickCategory("scrap")}>
              즐겨찾기
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="line"></div>

      <div className="nav">
        <div
          className="nav-title k-league-1"
          onClick={() => onClickCategory("k-league-1")}
        >
          K League 1
        </div>
        <div
          className="nav-title k-league-2"
          onClick={() => onClickCategory("k-league-2")}
        >
          K League 2
        </div>
        <div
          className="nav-title my-team"
          onClick={() => onClickCategory("my-team")}
        >
          My Team
        </div>
        <div
          className="nav-title scrap"
          onClick={() => onClickCategory("scrap")}
        >
          즐겨찾기
        </div>
      </div>
    </div>
  );
}

export default Navigation;
