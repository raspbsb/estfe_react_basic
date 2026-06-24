import styles from "./CreateArticle.module.css";

function CreateArticle({ onSubmit }) {
  console.log("CreateArticle render");
  return (
    <section>
      <h2>Create Article</h2>
      <form
        action=""
        onSubmit={e => {
          e.preventDefault();
          onSubmit(e.target.title.value, e.target.desc.value, e.target.diff.value);
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="desc">desc</label>
          <textarea name="desc" id="desc"></textarea>
        </div>
        <div>
          <label htmlFor="diff">diff</label>
          <textarea name="diff" id="diff"></textarea>
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
}
export default CreateArticle;
