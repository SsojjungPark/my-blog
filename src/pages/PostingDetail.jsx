import { useLocation } from "react-router-dom";

const PostingDetail = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <div className="postingContainer">
      <div className="postingHeader">
        <p className="title">제목</p>
      </div>
    </div>
  );
};

export default PostingDetail;
