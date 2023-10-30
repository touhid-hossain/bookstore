import React from "react";
import BookListFeature from "../bookListFeature/BookListFeature";
import BooksContainer from "../booksContainer/BooksContainer";

const Home = () => {
  return (
    <main className="py-12 px-6 2xl:px-6 container">
      <div className="order-2 xl:-order-1">
        <BookListFeature />
        <BooksContainer />
      </div>
    </main>
  );
};

export default Home;
