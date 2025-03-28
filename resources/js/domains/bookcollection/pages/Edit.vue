<script setup lang="ts">
import Form from './../components/Form.vue';
import {useRoute, useRouter} from 'vue-router';
import {bookStore} from '../store';
import {Book} from '../components/types';

const route = useRoute();
const router = useRouter();
const book = bookStore.getters.byId(+route.params.id);

const handleBook = async (book: Book) => {
    await bookStore.actions.update(book);
    router.push({path: '/'});
};
</script>

<template>
    <h1>Edit:</h1>
    <Form :book="book" @newBook="handleBook"></Form>
</template>
