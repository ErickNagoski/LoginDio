import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import { GlobalStyles } from "./styles/global";
import Login from "./pages/login";
import Feed from "./pages/feed";

createRoot(document.getElementById("root")!).render(
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="home" index element={<Home />} />
          <Route path="feed" index element={<Feed />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
);
