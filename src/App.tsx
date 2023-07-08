import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Feed } from "./pages/feed/feed";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
     </Routes >
    </Router>
  );
}

