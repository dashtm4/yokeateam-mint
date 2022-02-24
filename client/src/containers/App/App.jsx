import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

import { Landing } from "../../containers";

import "react-perfect-scrollbar/dist/css/styles.css";
import "./App.scss";

function App() {
  return (
    <main>
        <PerfectScrollbar>
          <Landing />
        </PerfectScrollbar>
    </main>
  );
}

export default App;
