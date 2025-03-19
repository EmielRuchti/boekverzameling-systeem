<script setup>
import Form from './../components/Form.vue';
import {useRouter} from 'vue-router';
import {addBook} from '../store';

const book = {title: '', author: ''};
const router = useRouter();
const handleBook = book => {
    addBook(book);
    router.push({path: '/'});
};
</script>

<template>
    <Form :book="book" @newBook="handleBook"></Form>
</template>
