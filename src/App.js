import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chat/:username" element={<ChatPage />} />
        <Route path="/chat/:username/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;