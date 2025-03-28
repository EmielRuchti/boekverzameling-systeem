<script setup lang="ts">
import Form from './../components/Form.vue';
import {useRoute, useRouter} from 'vue-router';
import type {Review} from './../components/types';
import {getReviewbyId, putReview} from '../../bookcollection/store';

const route = useRoute();
const router = useRouter();
const review = getReviewbyId(+route.params.review_id, +route.params.book_id);

const handleReview = async (review: Review) => {
    await putReview(review);
    router.push({name: 'show', params: {id: +route.params.book_id}});
};
</script>

<template>
    <h1>Edit:</h1>
    <Form :review="review" @newReview="handleReview"></Form>
</template>
