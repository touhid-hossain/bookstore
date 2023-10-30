import React, { useEffect, useState } from "react";
import { useAddBooksMutation } from "../../features/api/apiSlice";
import Success from "../loaders/Success";
import Error from "../loaders/Error";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [addBooks, { isLoading, isError, isSuccess }] = useAddBooksMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) navigate("/");
  }, [isSuccess, navigate]);

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState(null);
  const [rating, setRating] = useState(null);
  const [featured, setFeatured] = useState(false);

  const resetForm = () => {
    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice(null);
    setRating(null);
    setFeatured(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooks({
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
    });
    e.target.reset();
    resetForm();
  };

  return (
    <form class="book-form" method="POST" onSubmit={handleSubmit}>
      <div class="space-y-2">
        <label for="lws-bookName">Book Name</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-bookName"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div class="space-y-2">
        <label for="lws-author">Author</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div class="space-y-2">
        <label for="lws-thumbnail">Image Url</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
      </div>

      <div class="grid grid-cols-2 gap-8 pb-4">
        <div class="space-y-2">
          <label for="lws-price">Price</label>
          <input
            required
            class="text-input"
            type="number"
            id="lws-price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div class="space-y-2">
          <label for="lws-rating">Rating</label>
          <input
            required
            class="text-input"
            type="number"
            id="lws-rating"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
      </div>

      <div class="flex items-center">
        <input
          id="lws-featured"
          type="checkbox"
          name="featured"
          class="w-4 h-4"
          checked={featured}
          onChange={(e) => setFeatured(e.currentTarget.checked)}
        />
        <label for="lws-featured" class="ml-2 text-sm">
          This is a featured book
        </label>
      </div>

      <button disabled={isLoading} type="submit" class="submit" id="lws-submit">
        Add Book
      </button>
      {isSuccess && <Success message="Book is added successfully" />}
      {isError && <Error message="There is an error adding book!" />}
    </form>
  );
};

export default Form;
