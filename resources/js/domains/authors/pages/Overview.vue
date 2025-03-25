<script setup>
import {removeAuthor, getAllAuthors, fetchAuthors} from '../../authors/store';

//fetchAuthors();

const authors = getAllAuthors;
</script>

<template>
    <h1>Overview:</h1>
    <table>
        <thead>
            <tr>
                <th>Author</th>
                <th colspan="2">Acties</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(author, index) in authors" :key="index">
                <td>
                    {{ author.name }}
                </td>
                <td><RouterLink :to="{name: 'edit/authors', params: {id: author.id}}">Bewerk</RouterLink></td>
                <td><a class="button" @click="removeAuthor(index, author)">Verwijder</a></td>
            </tr>
        </tbody>
    </table>
</template>
