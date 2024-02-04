import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return (
    <div>
      <Heading />
      <BookList />
    </div>
  );
}

function Heading() {
  return <h1 className="head">Amazon BestSeller</h1>;
}

function BookList() {
  return (
    <section className="bookList">
      <Book
        imageUrl="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1483412266l/865.jpg"
        author="Paulo Coelho"
        bookName="The Alchemist"
      />
      <Book
        imageUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg"
        author="Harper Lee"
        bookName="To Kill a Mockingbird"
      />
      <Book
        imageUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644605295i/60393672.jpg"
        author="Colleen Hoover"
        bookName="It Starts With Us"
      />

      <Book
        imageUrl="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1638867089l/58690308.jpg"
        author="Emily Henry"
        bookName="Book Lovers"
      />

<Book
        imageUrl="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1627673847l/58346977.jpg"
        author="Colleen Hoover"
        bookName="Reminders Of Him"
      />

<Book
        imageUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680192054i/62994279.jpg"
        author="Ana Haung"
        bookName="King Of Pride"
      />

<Book
        imageUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1695345234i/199070596.jpg"
        author="Lauren Asher"
        bookName="Love Redesigned"
      />

<Book
        imageUrl="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1559332397i/46117419.jpg"
        author="Colleen Hoover"
        bookName="Regretting You"
      />


      {/* Add more Book components with unique content */}
    </section>
  );
}

const Book = ({ imageUrl, author, bookName }) => {
  const handleClick = () => {
    console.log(`Clicked on the author: ${author}`);
  };

  return (
    <article className="book">
      <Image url={imageUrl} />
      <Author author={author} />
      <BookName bookName={bookName} />
      <button onClick={handleClick}>Get Author</button>
    </article>
  );
};

const Image = ({ url }) => (
  <img className="img" src={url} alt="" />
);

const Author = ({ author }) => <h1>{author}</h1>;

const BookName = ({ bookName }) => <h1>{bookName}</h1>;

ReactDOM.render(<App />, document.getElementById("root"));
