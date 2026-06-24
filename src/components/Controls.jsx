import styles from "./Controls.module.css";

function Controls({ onChangeMode }) {
  console.log("Controls render");
  return (
    <div className={styles.menu}>
      <button
        onClick={() => {
          onChangeMode();
        }}
      >
        Create
      </button>
    </div>
  );
}
export default Controls;
