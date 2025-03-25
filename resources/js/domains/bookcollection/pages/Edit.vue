<script setup>
import Form from './../components/Form.vue';
import {useRoute, useRouter} from 'vue-router';
import {getBookById, putBook} from '../store';

const route = useRoute();
const router = useRouter();
// @ts-ignore
const book = getBookById(route.params.id);

// @ts-ignore
const handleBook = async book => {
    await putBook(book);
    router.push({path: '/'});
};
</script>

<template>
    <h1>Edit:</h1>
    <Form :book="book" @newBook="handleBook"></Form>
</template>
