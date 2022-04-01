import {useState, useEffect} from "react";
import styles from "./Styles.module.scss";


export const SearchInput = ({ rendalLoadBooks }:any) => {
  const [text, setText] = useState('');
  useEffect(() => {
     rendalLoadBooks(text);
  }, [text]);
  
  return (
    <div className={styles.searchInput}>
    <input className={styles.input} type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  );
};
