import React from "react";
import BookCards from "../bookCards/BookCards";

const BooksContainer = () => {
  return (
    <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* BOOK-CARDS */}
      <BookCards />
    </div>
  );
};

export default BooksContainer;
