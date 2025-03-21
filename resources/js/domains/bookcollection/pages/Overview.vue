<script setup>
import {removeBook, fetchBooks, getAllBooks} from '../store';
import {fetchAuthors, getAuthorById} from '../../authors/store';

fetchAuthors();
fetchBooks();

const books = getAllBooks;
</script>

<template>
    <h1>Overview:</h1>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Author</th>
                <th colspan="2">Acties</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(book, index) in books" :key="index">
                <td>{{ book.id }}</td>
                <td>{{ book.title }}</td>
                <td>{{ getAuthorById(book.author_id).value.name }}</td>
                <td><RouterLink :to="{name: 'edit', params: {id: book.id}}">Bewerk</RouterLink></td>
                <td><a href="" class="button" @click="removeBook(index, book)">Verwijder</a></td>
            </tr>
        </tbody>
    </table>
</template>
