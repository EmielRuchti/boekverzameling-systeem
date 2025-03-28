import axios from 'axios';
import {ref, computed} from 'vue';
import type {Book} from './components/types';
import type {Review} from '../reviews/components/types';

const books = ref<Book[]>([]);

const setAll = (items: []) => {
    items.forEach((item: Book) => {
        books.value[item.id] = item;
    });
};

export const fetchBooks = async () => {
    const {data} = await axios.get('api/books');
    if (!data) return;
    setAll(data);
};

export const postBook = async (book: Book) => {
    const {data} = await axios.post('api/books', book);
    if (!data) return;
    books.value[data.id] = data;
};

export const putBook = async (book: Book) => {
    const {data} = await axios.put(`/api/books/${book.id}`, book);
    if (!data) return;
    books.value[book.id] = data;
};

export const deleteBook = async (book: Book) => {
    const {data} = await axios.delete(`/api/books/${book.id}`);
    if (!data) return;
    delete books.value[book.id];
};

export const getAllBooks = computed(() => Object.values(books.value));
export const getBookById = (id: number) => computed(() => books.value[id]);

export const postReview = async (review: Review) => {
    const {data} = await axios.post('/api/reviews', review);
    if (!data) return;
    books.value[data.id] = data;
};

export const putReview = async (review: Review) => {
    const {data} = await axios.put(`/api/reviews/${review.id}`, review);
    if (!data) return;
    books.value[data.id] = data;
};

export const deleteReview = async (review: Review) => {
    const {data} = await axios.delete(`/api/reviews/${review.id}`);
    if (!data) return;
    books.value[data.id] = data;
};

export const getReviewbyId = (reviewId: number, bookId: number) =>
    computed(() => {
        const book = books.value[bookId];
        if (!book) return;
        return book.reviews.find(review => review.id == reviewId);
    });
