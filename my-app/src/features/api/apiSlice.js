import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  //USING TAGS FOR RECOGNIZE CACHES DATA
  tagTypes: ["Books"],
  // FETCH DATA FROM LOCAL SERVER
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      keepUnusedDataFor: 600,
      providesTags: ["Books"],
    }),
    // GET BOOK-ID
    getBookId: builder.query({
      query: (bookId) => `/books/${bookId}`,
      //   providesTags: ["Books"],
      providesTags: (result, error, arg) => [
        {
          id: arg,
        },
      ],
    }),
    // ADD NEW BOOK
    addBooks: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    //EDIT BOOK
    editBooks: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      //   invalidatesTags: ["Books"],
      invalidatesTags: (result, error, arg) => [
        "Books",
        {
          id: arg.id,
        },
      ],
    }),
    //Delete BOOKS
    deleteBooks: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useAddBooksMutation,
  useDeleteBooksMutation,
  useGetBookIdQuery,
  useEditBooksMutation,
  useGetBooksQuery,
} = apiSlice;
