<script setup>
import Form from './../components/Form.vue';
import {useRouter} from 'vue-router';
import {postAuthor} from '../store';

const author = {name: ''};
const router = useRouter();
// @ts-ignore
const handleAuthor = async author => {
    await postAuthor(author);
    router.push({path: '/authors'});
};
</script>

<template>
    <h1>Create:</h1>
    <Form :author="author" @newAuthor="handleAuthor"></Form>
</template>
