import {deleteRequest, postRequest, updateRequest} from '../../services/http';
import {storeModuleFactory} from '../factory/store';
import {computed} from 'vue';

export const bookStore = storeModuleFactory('books');

export const postReview = async (review: any) => {
    const {data} = await postRequest('reviews', review);
    if (!data) return;
    bookStore.setters.setById(data);
};

export const putReview = async (review: any) => {
    const {data} = await updateRequest('reviews', review);
    if (!data) return;
    bookStore.setters.setById(data);
};

export const deleteReview = async (review: any) => {
    const {data} = await deleteRequest('reviews' + '/' + review.id);
    if (!data) return;
    bookStore.setters.setById(data);
};

export const getReviewbyId = (reviewId: number, bookId: number) =>
    computed(() => {
        const book = bookStore.getters.byId(bookId).value;
        if (!book) return;
        return book.reviews.find((review: {id: number}) => review.id == reviewId);
    });
