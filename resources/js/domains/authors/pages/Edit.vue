<script setup lang="ts">
import Form from '../components/Form.vue';
import {useRoute, useRouter} from 'vue-router';
import {getAuthorById, putAuthor} from '../store';
import type {Author} from '../components/types';

const route = useRoute();
const router = useRouter();
const author = getAuthorById(+route.params.id);

const handleAuthor = async (author: Author) => {
    await putAuthor(author);
    router.push({path: '/authors'});
};
</script>

<template>
    <h1>Edit:</h1>
    <Form :author="author" @newAuthor="handleAuthor"></Form>
</template>
