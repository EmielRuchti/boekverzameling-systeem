<script setup>
import Form from './../components/Form.vue';
import {useRouter} from 'vue-router';
import {postBook} from '../store';

const book = {title: '', author_id: ''};
const router = useRouter();
// @ts-ignore
const handleBook = async book => {
    await postBook(book);
    router.push({path: '/'});
};
</script>

<template>
    <Form :book="book" @newBook="handleBook"></Form>
</template>
