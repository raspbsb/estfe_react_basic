import ArticleForm from "./ArticleForm";
// import styles from "./UpdateArticle.module.css";

function UpdateArticle({ title, desc, diff, onSubmit }) {
  console.log("UpdateArticle render");

  return (
    <section className="card">
      <h2 className="card-body">Update Article</h2>
      <ArticleForm iniTitle={title} initDesc={desc} initDiff={diff} onSubmit={onSubmit} />
    </section>
  );
}

export default UpdateArticle;
