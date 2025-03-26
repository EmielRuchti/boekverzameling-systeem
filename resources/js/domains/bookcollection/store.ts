import axios from 'axios';
import {ref, computed, Ref, ComputedRef} from 'vue';
import type {Book, Review} from './components/types';

const books = ref<Book[]>([]);

export const fetchBooks = async () => {
    const {data} = await axios.get('api/books');
    if (!data) return;
    books.value = data;
};

export const postBook = async (book: Book) => {
    const {data} = await axios.post('api/books', book);
    if (!data) return;
    books.value.push(data);
};

export const putBook = async (book: Book) => {
    const {data} = await axios.put(`/api/books/${book.id}`, book);
    if (!data) return;
    books.value[listBookIndex(book)] = data;
};

const listBookIndex = (book: Book) => {
    for (const [index, item] of books.value.entries()) {
        if (item.id == book.id) return index;
    }
    return 0;
};

export const deleteBook = async (book: Book) => {
    const response = await axios.delete(`/api/books/${book.id}`);
};

export const getAllBooks = computed(() => books.value);
export const getBookById = (id: any) => computed(() => books.value.find((book: Book) => book.id == id));

export const removeBook = async (id: number, book: Book) => {
    await deleteBook(book);
    books.value.splice(id, 1);
};

export const postReview = async (review: Review) => {
    const {data} = await axios.post('/api/reviews', review);
    if (!data) return;
    const updateBook: any = getBookById(review.book_id);
    updateBook.value.reviews.push(data);
};

export const putReview = async (review: Review) => {
    const {data} = await axios.put(`/api/reviews/${review.id}`, review);
    if (!data) return;
    const updateBook: any = getBookById(review.book_id);
    updateBook.value.reviews[listIndex(updateBook, review)] = data;
};

const listIndex = (book: Ref<Book>, review: Review) => {
    for (const [index, item] of book.value.reviews.entries()) {
        if (item.id == review.id) return index;
    }
    return 0;
};

export const deleteReview = async (review: Review) => {
    const response = await axios.delete(`/api/reviews/${review.id}`);
};

export const removeReview = async (id: number, review: Review) => {
    await deleteReview(review);
    const updateBook: any = getBookById(review.book_id);
    updateBook.value.reviews.splice(id, 1);
};

export const getReviewbyId = (id: any, book: Ref<Book>) =>
    computed(() => book.value.reviews.find((currentReview: Review) => currentReview.id == id));
