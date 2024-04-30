import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span>My Blog</span>
      </Link>
      <div>
        <Link to="/write">
          {/* url만 이동시켜주면 되기때문에 Link 태그 사용 */}
          <button>새글 작성</button>
        </Link>
        <Link to="/login">
          <button>로그인</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
