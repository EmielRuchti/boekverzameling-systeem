<script setup>
import Form from '../components/Form.vue';
import {useRoute, useRouter} from 'vue-router';
import {getAuthorById, putAuthor} from '../store';

const route = useRoute();
const router = useRouter();
// @ts-ignore
const author = getAuthorById(route.params.id);

// @ts-ignore
const handleAuthor = async author => {
    await putAuthor(author);
    router.push({path: '/authors'});
};
</script>

<template>
    <h1>Edit:</h1>
    <Form :author="author" @newAuthor="handleAuthor"></Form>
</template>
