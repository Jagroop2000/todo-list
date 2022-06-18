import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Screens/Dashboard/dashboard";
import SplashScreen from "../Screens/Splash/splash-screen";



function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </div>
  );
}

export default Navigation;