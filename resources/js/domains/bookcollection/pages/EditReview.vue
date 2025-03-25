<script setup>
import ReviewForm from './../components/ReviewForm.vue';
import {useRoute, useRouter} from 'vue-router';
import {getBookById, getReviewbyId, putReview} from '../store';

const route = useRoute();
const router = useRouter();

// @ts-ignore
const book = getBookById(route.params.book_id);
// @ts-ignore
const review = getReviewbyId(route.params.review_id, book);

// @ts-ignore
const handleReview = async review => {
    await putReview(review);
    router.push({name: 'show', params: {id: book.value.id}});
};
</script>

<template>
    <h1>Edit:</h1>
    <ReviewForm :review="review" @newReview="handleReview"></ReviewForm>
</template>
