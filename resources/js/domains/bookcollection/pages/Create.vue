<script setup lang="ts">
import Form from './../components/Form.vue';
import {useRouter} from 'vue-router';
import {bookStore} from '../store';
import {Book} from '../components/types';

const book = {title: '', author_id: ''};
const router = useRouter();
const handleBook = async (book: Book) => {
    await bookStore.actions.create(book);
    router.push({path: '/'});
};
</script>

<template>
    <Form :book="book" @newBook="handleBook"></Form>
</template>
