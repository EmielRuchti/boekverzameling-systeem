import axios from 'axios';
import {ref, computed} from 'vue';

const authors: any = ref([]);

export const fetchAuthors = async () => {
    const {data} = await axios.get('api/authors');
    if (!data) return;
    authors.value = data;
};

export const postAuthor = async (author: any) => {
    const {data} = await axios.post('/api/authors', author);
    if (!data) return;
    authors.value.push(data);
};

export const putAuthor = async (author: any) => {
    const {data} = await axios.put(`/api/authors/${author.id}`, author);
    if (!data) return;
    authors.value[listIndex(author)] = data;
};

export const deleteAuthor = async (author: any) => {
    const response = await axios.delete(`/api/authors/${author.id}`);
};

export const getAllAuthors = computed(() => authors.value);
export const getAuthorById = (id: number) => computed(() => authors.value.find((author: any) => author.id == id));

export const removeAuthor = async (id: number, author: any) => {
    await deleteAuthor(author);
    authors.value.splice(id, 1);
};

const listIndex = (author: any) => {
    for (const [index, item] of authors.value.entries()) {
        if (item.id == author.id) return index;
    }
    return 0;
};
