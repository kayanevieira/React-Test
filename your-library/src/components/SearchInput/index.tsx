import react from "react";
import styles from "./Styles.module.scss";

type Props = {
  value?: string | number | readonly string[] | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = () => {
  return (
    <div className={styles.searchInput}>
    <input className={styles.input} type="text"  />
    </div>
  );
};
