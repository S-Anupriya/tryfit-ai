import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Products from "./pages/Products";
import TryOn from "./pages/TryOn";
import Results from "./pages/Results";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* Navigation Bar */}
        <nav className="navbar">

          <Link to="/" className="logo">
            <Sparkles size={20} />
            <span>TryFit AI</span>
          </Link>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/products">Explore</Link>
            <Link to="/try-on">Try-On</Link>
            <Link to="/profile">Profile</Link>
          </div>

          <Link to="/login" className="login-button">
            Login
          </Link>

        </nav>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/try-on" element={<TryOn />} />
          <Route path="/results" element={<Results />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;