const PostingCard = ({ post }) => {
  return (
    <div className="postingCard">
      <div className="postingHeader">
        <img src={post.homePostingUser.profileImageURL} alt="user" width={10} />
        <span>{post.homePostingUser.nickname}</span>
      </div>
      <div className="postingBody">
        <img
          src={post.thumbnailImageURL || "https://source.unsplash.com/random"}
          alt="img"
        />
        <p className="title">{post.title}</p>
        <p className="htmlContent">{post.htmlContent.slice(0, 10)}</p>
      </div>
      <div className="postingFooter">
        <span>하트{post.starCnt}</span>
      </div>
    </div>
  );
};

export default PostingCard;
