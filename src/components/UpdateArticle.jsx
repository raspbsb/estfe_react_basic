import ArticleForm from "./ArticleForm";
import styles from "./UpdateArticle.module.css";

function UpdateArticle({ title, desc, diff, onSubmit }) {
  console.log("UpdateArticle render");

  return (
    <section>
      <h2>Update Article</h2>
      <ArticleForm iniTitle={title} initDesc={desc} initDiff={diff} onSubmit={onSubmit} />
    </section>
  );
}

export default UpdateArticle;
