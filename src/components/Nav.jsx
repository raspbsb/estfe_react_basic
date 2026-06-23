// Nav 컴포넌트
function Nav({ data, onChangeMode }) {
  console.log("Nav render");

  const lists = data.map(d => (
    <li key={d.id}>
      <a
        href={`/${d.id}`}
        data-id={d.id}
        onClick={e => {
          e.preventDefault();
          console.log(e.target);
          console.log('`"↑ 여기에요 e.target"`');
          onChangeMode(Number(e.target.dataset.id));
        }}
      >
        {d.title}
      </a>
    </li>
  ));
  // list에 출력할 코드 생성

  return (
    <nav>
      <ul>{lists}</ul>
    </nav>
  );
}

export default Nav;
