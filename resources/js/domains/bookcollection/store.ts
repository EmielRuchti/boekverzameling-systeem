import axios from 'axios';
import {ref, computed} from 'vue';

const books: any = ref([]);

export const fetchBooks = async () => {
    const {data} = await axios.get('api/books');
    if (!data) return;
    books.value = data;
};

export const postBook = async (book: any) => {
    const {data} = await axios.post('api/books', book);
    if (!data) return;
    books.value.push(data);
};

export const putBook = async (book: any) => {
    const {data} = await axios.put(`/api/books/${book.id}`, book);
    if (!data) return;
    books.value[listBookIndex(book)] = data;
};

const listBookIndex = (book: any) => {
    for (const [index, item] of books.value.entries()) {
        if (item.id == book.id) return index;
    }
    return 0;
};

export const deleteBook = async (book: any) => {
    const response = await axios.delete(`/api/books/${book.id}`);
};

export const getAllBooks = computed(() => books.value);
export const getBookById = (id: number) => computed(() => books.value.find((book: any) => book.id == id));

export const removeBook = async (id: number, book: any) => {
    await deleteBook(book);
    books.value.splice(id, 1);
};

export const postReview = async (review: any) => {
    const {data} = await axios.post('/api/reviews', review);
    if (!data) return;
    const updateBook = getBookById(review.book_id);
    updateBook.value.reviews.push(data);
};

export const putReview = async (review: any) => {
    const {data} = await axios.put(`/api/reviews/${review.id}`, review);
    if (!data) return;
    const updateBook = getBookById(review.book_id);
    updateBook.value.reviews[listIndex(updateBook, review)] = data;
};

const listIndex = (book: any, review: any) => {
    for (const [index, item] of book.value.reviews.entries()) {
        if (item.id == review.id) return index;
    }
    return 0;
};

export const deleteReview = async (review: any) => {
    const response = await axios.delete(`/api/reviews/${review.id}`);
};

export const removeReview = async (id: number, review: any) => {
    await deleteReview(review);
    const updateBook = getBookById(review.book_id);
    updateBook.value.reviews.splice(id, 1);
};

export const getReviewbyId = (id: number, book: any) =>
    computed(() => book.value.reviews.find((currentReview: any) => currentReview.id == id));
