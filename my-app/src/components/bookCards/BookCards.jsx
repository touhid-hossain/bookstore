import React from "react";
import { useSelector } from "react-redux";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import BookLoader from "../loaders/BookLoader";
import Error from "../loaders/Error";
import Books from "./Books";

const BookCards = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const { status } = useSelector((state) => state.filter);
  const { search } = useSelector((state) => state.filter);
  // console.log(search)
  // console.log(books)

  //Filter-Books - Engine
  const filterByStatus = (book) => {
    switch (status) {
      case "All":
        return book;

      case "Featured":
        return book.featured;

      default:
        return book;
    }
  };

  // Search Books - Engine
  const searchBooksByInputValue = (val) => {
    if (search === "") {
      return val;
    } else if (val.name.toLowerCase().includes(search?.toLowerCase())) {
      return val;
    }
  };

  //Decide what to render
  let content = null;

  if (isLoading) {
    content = (
      <>
        <BookLoader />
        <BookLoader />
        <BookLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && isError && books?.length === 0) {
    content = <Error message="No books found!!" />;
  }

  if (!isLoading && !isError && books?.length > 0) {
    content = books
      .filter(filterByStatus)
      .filter(searchBooksByInputValue)
      .map((book) => <Books key={book.id} book={book} />);
  }

  return (
    // <!-- Card 1 -->
    content
  );
};

export default BookCards;
