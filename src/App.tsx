import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import BlogForm from "./components/BlogForm";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import BlogById from "./pages/BlogById";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogById />} />
        <Route path="/create" element={<BlogForm />} />
      </Routes>
    </>
  );
}
