import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Title from "./Components/Navigation/Title";
import Nav from "./Components/Navigation/Nav";

import Main from "./Components/Main/Main";
import KLeague1 from "./Components/KLeague/KLeague1";
import KLeague2 from "./Components/KLeague/KLeague2";
import Detail from "./Components/Detail/Detail";
import MyTeam from "./Components/MyTeam/MyTeam";
import Scrap from "./Components/Scrap/Scrap";
import Notfound from "./Components/NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Title />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/k-league/1" element={<KLeague1 />} />
        <Route path="/k-league/2" element={<KLeague2 />} />
        <Route path="/k-league/detail" element={<Detail />} />
        <Route path="/my-team" element={<MyTeam />} />
        <Route path="/my-team/detail" element={<Detail />} />
        <Route path="/scrap" element={<Scrap />} />
        <Route render={({ location }) => <Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
