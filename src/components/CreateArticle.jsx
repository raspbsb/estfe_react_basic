import ArticleForm from "./ArticleForm";
// import styles from "./CreateArticle.module.css";

function CreateArticle({ onSubmit }) {
  console.log("CreateArticle render");

  return (
    <section className="card">
      <h2 className="card-body">Create Article</h2>
      <ArticleForm onSubmit={onSubmit} />
    </section>
  );
}

export default CreateArticle;
