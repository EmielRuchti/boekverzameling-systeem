<script setup lang="ts">
import Form from './../../reviews/components/Form.vue';
import {useRoute} from 'vue-router';
import {getBookById, postReview, deleteReview} from '../store';
import {getAuthorById} from '../../authors/store';
import type {Review} from '../../reviews/components/types';

const route = useRoute();
const book = getBookById(+route.params.id);
const review = {body: '', book_id: route.params.id};

const submitReview = async (review: Review) => {
    await postReview(review);
};
</script>

<template>
    <div v-if="book">
        <h1 class="font-bold">Book title:</h1>
        - {{ book.title }}
        <h1 class="font-bold">Author:</h1>
        - {{ getAuthorById(book.author_id).value.name }}
        <h1 class="font-bold">Reviews:</h1>
        <div v-for="(review, index) in book.reviews" :key="index" class="border-2 border-solid p-5">
            <p>{{ review.body }}</p>
            <RouterLink :to="{name: 'edit/review', params: {book_id: review.book_id, review_id: review.id}}">
                Bewerk
            </RouterLink>
            <a @click="deleteReview(review)">Verwijder</a>
        </div>
        <h1>New review:</h1>
        <Form :review="review" @newReview="submitReview"></Form>
    </div>
</template>
