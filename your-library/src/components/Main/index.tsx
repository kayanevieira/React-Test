import react from "react";

export const Main = ({ listOfBooks } :any) => {
  return (
    <div>
        {listOfBooks.map((book:any) => (
               <div>
               <h1>{book.volumeInfo.title}</h1>
               <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
               <h3>{book.volumeInfo.description}</h3>
           </div>
        ))}
    </div>
  );
};
