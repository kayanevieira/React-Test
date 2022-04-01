import React, { useState } from "react";
import { SearchInput } from "../SearchInput";
import styles from "./Styles.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Procure livros disponíveis</h1>
      <SearchInput/>
    </div>
  );
}

export default App;
