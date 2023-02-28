import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import BlogDetail from "./pages/BlogDetail";
import { NotMatch } from "./pages/NotMatch";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;
