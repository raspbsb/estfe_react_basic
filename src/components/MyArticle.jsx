import styles from "./MyArticle.module.css";

// MyArticle 컴포넌트
function MyArticle({ mode, title, desc, onChangeMode, diff, onDelete }) {
  console.log("MyArticle render");
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <div className={styles.pBox}>
          <p>{desc}</p>
          {diff && <p className={styles.diff}>난이도: {diff}</p>}
        </div>
      </article>
      <div className={styles.btnBox}>
        {onChangeMode && <button onClick={onChangeMode}>수정</button>}
        {onDelete && <button onClick={onDelete}>삭제</button>}
      </div>
    </section>
  );
}
export default MyArticle;
