import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Header from "./components/header/Header";
import SidebarLeft from "./components/sidebar/SidebarLeft";
import SidebarRight from "./components/sidebar/SidebarRight";
import { auth } from "./config/firebase";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(false);
      }
    });
  });

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header user={user} selected />
                <div className="app__page">
                  <SidebarLeft user={user} />
                  <SidebarRight user={user} />
                  {/* <BookRide />
                  <OfferRide /> */}
                </div>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
