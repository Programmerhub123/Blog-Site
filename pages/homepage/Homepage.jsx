import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/">
          <div className="home">
            <Posts />
            <Sidebar />
          </div>
        </Route>
      </div>
    </Router>
  );
}
