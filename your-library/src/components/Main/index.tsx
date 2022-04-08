import { Button, Card } from "react-bootstrap";
import styles from "./Styles.module.scss";

export const Main = ({ listOfBooks }: any) => {
  return (
    <div>
      {listOfBooks.map((book: any) => (
        <div className={styles.container}>
          <Card>
            <Card.Img className={styles.imgOfBook} variant="top" src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title} />
            <Card.Body className={styles.cardBody}>
              <Card.Title className={styles.titlebook}>{book.volumeInfo.title}</Card.Title>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};
