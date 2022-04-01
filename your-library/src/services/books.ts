import { bookApi } from "./bookApi";

export const books = (name: string) => bookApi.get(`/books/v1/volumes?q=${name}`);