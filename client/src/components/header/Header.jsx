import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">Trees for thoughts</span> */}
        <span className="headerTitleLg">BLOGGER</span>
      </div>
      <img
        className="headerImg"
        src="https://images.newscientist.com/wp-content/uploads/2022/01/31154523/PRI_220952290.jpg?width=778"
        alt=""
      />
    </div>
  );
}
