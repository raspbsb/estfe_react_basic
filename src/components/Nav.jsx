// import styles from "./Nav.module.css";
import { memo } from "react";

// Nav 컴포넌트 : 매개변수로 받은 변수와 함수로 순회 렌더링
const Nav = memo(function Nav({ id, data, onChangeMode }) {
  console.log("Nav render");
  const lists = data.map(d => (
    <li key={d.id} className="nav-item">
      <a
        className={`nav-link ${d.id === id ? "active" : ""}`}
        href={`/${d.id}`}
        // data-id={d.id}
        onClick={e => {
          // console.log(e.target.dataset.id);
          e.preventDefault();
          onChangeMode(d.id);
        }}
      >
        {d.title}
      </a>
    </li>
  ));
  //list에 출력할 코드 생성
  return (
    <nav>
      <ul className="nav flex-column nav-pills">{lists}</ul>
    </nav>
  );
});

export default Nav;
