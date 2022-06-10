import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import JoinForm from "./components/JoinForm";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joinroom" element={<JoinForm />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
