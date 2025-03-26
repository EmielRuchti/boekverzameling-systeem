<script setup lang="ts">
import ReviewForm from './../components/ReviewForm.vue';
import {useRoute, useRouter} from 'vue-router';
import {getBookById, getReviewbyId, putReview} from '../store';
import {Review} from '../components/types';

const route = useRoute();
const router = useRouter();

const book: any = getBookById(route.params.book_id);
const review = getReviewbyId(route.params.review_id, book);

const handleReview = async (review: Review) => {
    await putReview(review);
    router.push({name: 'show', params: {id: book.value.id}});
};
</script>

<template>
    <h1>Edit:</h1>
    <ReviewForm :review="review" @newReview="handleReview"></ReviewForm>
</template>
