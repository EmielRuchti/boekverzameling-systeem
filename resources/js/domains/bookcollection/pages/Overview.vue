<script setup lang="ts">
import {bookStore} from '../store';
import {authorStore} from '../../authors/store';
import {ref} from 'vue';
import {getRequest} from '../../../services/http';

const books: any = bookStore.getters.all;
const user = ref('');

const getUser = async () => {
    user.value = '';
    const {data} = await getRequest('me');
    if (!data) return;
    user.value = data;
};
</script>

<template>
    <button
        @click="getUser"
        class="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
        /Me
    </button>
    {{ user }}
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
                    <td>{{ authorStore.getters.byId(book.author_id).value?.name }}</td>
                    <td><RouterLink :to="{name: 'edit', params: {id: book.id}}">Bewerk</RouterLink></td>
                    <td><a class="button" @click="bookStore.actions.deleteItemById(book.id)">Verwijder</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
