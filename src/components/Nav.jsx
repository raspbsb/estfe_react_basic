import styles from "./Nav.module.css";
import { memo } from "react";

// Nav 컴포넌트 : 매개변수로 받은 변수와 함수로 순회 렌더링
const Nav = memo(function Nav({ data, onChangeMode }) {
  console.log("Nav render");
  const lists = data.map(d => (
    <li key={d.id}>
      <a
        href={`/${d.id}`}
        data-id={d.id}
        onClick={e => {
          // console.log(e.target.dataset.id);
          e.preventDefault();
          onChangeMode(Number(e.target.dataset.id));
        }}
      >
        {d.title}
      </a>
    </li>
  ));
  //list에 출력할 코드 생성
  return (
    <nav className={styles.nav}>
      <ul>{lists}</ul>
    </nav>
  );
});

export default Nav;
