<script setup lang="ts">
import Form from './../components/Form.vue';
import {useRouter} from 'vue-router';
import {postAuthor} from '../store';
import type {Author} from '../components/types';

const author = {name: ''};
const router = useRouter();
const handleAuthor = async (author: Author) => {
    await postAuthor(author);
    router.push({path: '/authors'});
};
</script>

<template>
    <h1>Create:</h1>
    <Form :author="author" @newAuthor="handleAuthor"></Form>
</template>
