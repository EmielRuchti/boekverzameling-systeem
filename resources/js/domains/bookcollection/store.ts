import axios from 'axios';
import {ref, computed} from 'vue';

const books: any = ref([]);

const fetchBooks = async () => {
    const {data} = await axios.get('api/books');
    if (!data) return;
    books.value = data;
};
fetchBooks();

const postBook = async (book: any) => {
    const {data} = await axios.post('api/book', {
        title: book.title,
        author: book.author,
    });
    console.log(data);
    console.log(book);
};

export const getAllBooks = computed(() => books.value);
export const getBookById = (id: number) => computed(() => books.value.find((book: any) => book.id == id));
export const addBook = (book: any) => {
    //books.value.push(book);
    postBook(book);
};
