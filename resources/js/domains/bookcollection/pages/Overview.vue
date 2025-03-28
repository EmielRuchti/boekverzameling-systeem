<script setup lang="ts">
import {bookStore} from '../store';
import {authorStore} from '../../authors/store';

const books: any = bookStore.getters.all;
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
                    <td>{{ authorStore.getters.byId(book.author_id).value.name }}</td>
                    <td><RouterLink :to="{name: 'edit', params: {id: book.id}}">Bewerk</RouterLink></td>
                    <td><a class="button" @click="bookStore.actions.deleteItemById(book.id)">Verwijder</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
