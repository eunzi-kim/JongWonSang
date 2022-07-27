import React from "react";
import { useDispatch } from "react-redux";
import ActiveCategory from "../../Redux/Actions/MainAction";

function Main() {
  const dispatch = useDispatch();

  dispatch(ActiveCategory("main"));

  return <div>Main</div>;
}

export default Main;
