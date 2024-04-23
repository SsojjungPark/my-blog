import { fake_data } from "../../apis/blog";
import PostingCard from "./PostingCard";

const MainPosting = () => {
  return (
    <div
      className="mainPosting"
      style={{
        padding: "10px",
        border: "1px solid blue",
        widht: "100%",
        height: "500px",
      }}>
      {fake_data.map(post => (
        <PostingCard key={post.postingID} post={post} />
      ))}
    </div>
  );
};

export default MainPosting;
