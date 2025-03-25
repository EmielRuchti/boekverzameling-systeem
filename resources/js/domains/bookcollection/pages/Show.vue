<script setup>
import ReviewForm from './../components/ReviewForm.vue';
import {useRoute, useRouter} from 'vue-router';
import {getBookById, postReview, removeReview} from '../store';
import {getAuthorById} from '../../authors/store';

const route = useRoute();
const router = useRouter();
// @ts-ignore
const book = getBookById(route.params.id);
// @ts-ignore
const review = {body: '', book_id: book.value.id};

// @ts-ignore
const submitReview = async review => {
    await postReview(review);
};
</script>

<template>
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
        <a @click="removeReview(index, review)">Verwijder</a>
    </div>
    <h1>New review:</h1>
    <ReviewForm :review="review" @newReview="submitReview"></ReviewForm>
</template>
