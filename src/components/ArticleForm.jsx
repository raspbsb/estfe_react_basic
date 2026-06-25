import { useState } from "react";
import styles from "./ArticleForm.module.css";

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
      action=""
      onSubmit={e => {
        e.preventDefault();
        onSubmit(content.title, content.desc, content.diff);
      }}
    >
      <div>
        <label htmlFor="title">title</label>
        <input type="text" name="title" id="title" value={content.title} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="desc">desc</label>
        <textarea name="desc" id="desc" value={content.desc} onChange={handleChange}></textarea>
      </div>
      <div>
        <label htmlFor="diff">diff</label>
        <input
          type="number"
          name="diff"
          id="diff"
          value={content.diff}
          onChange={handleChange}
        ></input>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default ArticleForm;
