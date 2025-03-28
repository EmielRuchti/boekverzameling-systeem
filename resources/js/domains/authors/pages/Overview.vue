<script setup lang="ts">
import {authorStore} from '../../authors/store';
const authors: any = authorStore.getters.all;
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
                <td><a class="button" @click="authorStore.actions.deleteItemById(author.id)">Verwijder</a></td>
            </tr>
        </tbody>
    </table>
</template>
