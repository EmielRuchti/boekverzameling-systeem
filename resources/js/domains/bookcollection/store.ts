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
    const $update: any = books.value.find((updateBook: any) => updateBook.id == book.id);
    books.value[books.value.indexOf($update)] = data;
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
