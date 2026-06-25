import { useState } from "react";
// import styles from "./ArticleForm.module.css";

function ArticleForm({ iniTitle = "", initDesc = "", initDiff = "", onSubmit }) {
  const [content, setContent] = useState({
    title: iniTitle,
    desc: initDesc,
    diff: initDiff,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setContent(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form
      className="d-flex flex-column gap-2 card-body"
      action=""
      onSubmit={e => {
        e.preventDefault();
        onSubmit(content.title, content.desc, content.diff);
      }}
    >
      <div>
        <label htmlFor="title">title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          id="title"
          value={content.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="desc">desc</label>
        <textarea
          className="form-control"
          name="desc"
          id="desc"
          value={content.desc}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="diff">diff</label>
        <input
          className="form-control"
          type="number"
          name="diff"
          id="diff"
          value={content.diff}
          onChange={handleChange}
        ></input>
      </div>
      <button className="btn btn-secondary">Submit</button>
    </form>
  );
}

export default ArticleForm;
