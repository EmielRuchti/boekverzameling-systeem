<script setup>
import {deleteBook, getAllBooks} from '../store';
import {getAuthorById} from '../../authors/store';

const books = getAllBooks;
</script>

<template>
    <div v-if="books">
        <h1>Overview:</h1>
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th colspan="2">Acties</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books">
                    <td>
                        <RouterLink :to="{name: 'show', params: {id: book.id}}">{{ book.title }}</RouterLink>
                    </td>
                    <td>{{ getAuthorById(book.author_id).value.name }}</td>
                    <td><RouterLink :to="{name: 'edit', params: {id: book.id}}">Bewerk</RouterLink></td>
                    <td><a class="button" @click="deleteBook(book)">Verwijder</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
