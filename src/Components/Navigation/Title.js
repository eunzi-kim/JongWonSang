import React from "react";

import { Dropdown } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";

import "./Navigation.css";

function Title() {
  // 제목 누르면 메인화면으로 가기
  const onClickTitle = () => {
    window.location.href = "/";
  };

  return (
    <div className="title">
      <h1 onClick={onClickTitle}>Jong Won Sang</h1>

      <div className="nav-m">
        <Dropdown>
          <Dropdown.Toggle variant="white" id="nav-dropdown-basic">
            <GiHamburgerMenu size="2rem" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/k-league/1">K League 1</Dropdown.Item>
            <Dropdown.Item href="/k-league/2">K League 2</Dropdown.Item>
            <Dropdown.Item href="/my-team">My Team</Dropdown.Item>
            <Dropdown.Item href="/scrap">즐겨찾기</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Title;
