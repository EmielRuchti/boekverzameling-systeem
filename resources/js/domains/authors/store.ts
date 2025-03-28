import axios from 'axios';
import {ref, computed} from 'vue';
import type {Author} from './components/types';

const authors = ref<Author[]>([]);

const setAll = (items: []) => {
    items.forEach((item: Author) => {
        authors.value[item.id] = item;
    });
};

export const fetchAuthors = async () => {
    const {data} = await axios.get('api/authors');
    if (!data) return;
    setAll(data);
};

export const postAuthor = async (author: Author) => {
    const {data} = await axios.post('/api/authors', author);
    if (!data) return;
    authors.value[data.id] = data;
};

export const putAuthor = async (author: Author) => {
    const {data} = await axios.put(`/api/authors/${author.id}`, author);
    if (!data) return;
    authors.value[author.id] = data;
};

export const deleteAuthor = async (author: Author) => {
    const {data} = await axios.delete(`/api/authors/${author.id}`);
    if (!data) return;
    delete authors.value[author.id];
};

export const getAllAuthors = computed(() => Object.values(authors.value));
export const getAuthorById = (id: number) => computed(() => authors.value[id]);
