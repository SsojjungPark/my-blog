import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Main from "./pages/Main";
import Write from "./pages/Write";
import PostingDetail from "./pages/PostingDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} /> {/* 메인 페이지 */}
        <Route path="/write" element={<Write />} /> {/* 새글 작성 페이지 */}
        <Route path="/post/:postId" element={<PostingDetail />} />
      </Routes>
    </>
  );
}

export default App;
