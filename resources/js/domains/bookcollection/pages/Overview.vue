<script setup>
import {getAllBooks} from '../store';
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
            </tr>
        </thead>
        <tbody>
            <tr v-for="(book, index) in books" :key="index">
                <td>{{ book.id }}</td>
                <td>{{ book.title }}</td>
                <td>{{ book.author.name }}</td>
            </tr>
        </tbody>
    </table>
</template>
