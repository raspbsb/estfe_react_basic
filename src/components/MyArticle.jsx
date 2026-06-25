// import styles from "./MyArticle.module.css";

// MyArticle 컴포넌트
function MyArticle({ mode, title, desc, onChangeMode, diff, onDelete }) {
  console.log("MyArticle render");
  return (
    <section className="card">
      <article className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="pBox">
          <p className="card-text">{desc}</p>
          {diff && <p className="card-text diff">난이도: {diff}</p>}
        </div>
      </article>
      <div className="d-flex justify-content-end p-3 gap-1 btnBox">
        {onChangeMode && (
          <button className="btn btn-secondary btn-sm" onClick={onChangeMode}>
            수정
          </button>
        )}
        {onDelete && (
          <button className="btn btn-danger btn-sm" onClick={onDelete}>
            삭제
          </button>
        )}
      </div>
    </section>
  );
}
export default MyArticle;
