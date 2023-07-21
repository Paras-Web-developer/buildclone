import React from "react";
import {
  BrowserRouter,
  Outlet,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Nav from "../component/nav";
import Main from "../pages/Main";
import Scroller from "../component/Scroller";
import Bathroom from "../component/Bathroom";
import Types from "../component/Types";
import Citys from "../pages/Citys";
import Noida from "../component/Noida";
import Delhi from "../component/Delhi";
import Gurugram from "../component/Gurugram";
import Faridabad from "../component/Faridabad";
import Mumbai from "../component/Mumbai";

export default function routing() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Bathroom />} />
          <Route path="/Bathroom" element={<Bathroom />}></Route>
          <Route path="/types" element={<Types />}></Route>
        </Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Citys />}>
          <Route index element={<Noida />} />
          <Route path="/Noida" element={<Noida />}></Route>
          <Route path="/Delhi" element={<Delhi />}></Route>
          <Route path="/Gurugram" element={<Gurugram />}></Route>
          <Route path="/Faridabad" element={<Faridabad />}></Route>
          <Route path="/Mumbai" element={<Mumbai />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
