import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBooks } from "../../features/filter/filterSlice";

const BookListFeature = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.filter);

  const handleClick = (status) => {
    dispatch(filterBooks(status));
  };

  return (
    <div class="flex items-center justify-between mb-12">
      <h4 class="mt-2 text-xl font-bold">Book List</h4>

      <div class="flex items-center space-x-4">
        <button
          class={
            status === "All" ? "lws-filter-btn active-filter" : "lws-filter-btn"
          }
          onClick={() => handleClick("All")}
        >
          All
        </button>
        <button
          class={
            status === "Featured"
              ? "lws-filter-btn active-filter"
              : "lws-filter-btn"
          }
          onClick={() => handleClick("Featured")}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default BookListFeature;
