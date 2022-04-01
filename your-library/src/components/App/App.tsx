import { SearchInput } from "../SearchInput";
import { useState } from "react";
import styles from "./Styles.module.scss";
import { books } from "../../services/books";
import { Main } from "../Main";

export default function App() {
    const [listBooks, setlistBooks] = useState([]);
  const rendalLoadBooks = async (text: string) => {
    if (text !== "") {
      const response = await books(text);
      const items = response.data.items;
        setlistBooks(items);
    }
  };
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Procure livros disponíveis</h1>
      <SearchInput  rendalLoadBooks={ rendalLoadBooks } />
      <Main listOfBooks={ listBooks }/>
    </div>
  );
}
