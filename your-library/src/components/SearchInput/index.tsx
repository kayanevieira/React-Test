import react, {useState} from "react";
import styles from "./Styles.module.scss";


export const SearchInput = () => {
  const [text, setText] = useState('');
  console.log(text);
  return (
    <div className={styles.searchInput}>
    <input className={styles.input} type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  );
};
