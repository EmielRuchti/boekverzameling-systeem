<script setup lang="ts">
import {authorStore} from '../../authors/store';

const {book} = defineProps({
    book: Object,
});

const newBook = Object.assign({}, book);

const emit = defineEmits(['newBook']);
const submitForm = () => {
    emit('newBook', newBook);
};

const authors: any = authorStore.getters.all;
</script>

<template>
    <div v-if="authors">
        <form @submit.prevent="submitForm" class="max-w-sm mx-auto">
            <div class="mb-5">
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input
                    v-model="newBook.title"
                    type="text"
                    id="title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                />
            </div>
            <div class="mb-5">
                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select Author
                </label>
                <select
                    v-model="newBook.author_id"
                    id="author"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option v-for="(author, index) in authors" :key="index" :value="author.id">
                        {{ author.name }}
                    </option>
                </select>
            </div>
            <button
                type="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
        </form>
    </div>
</template>
