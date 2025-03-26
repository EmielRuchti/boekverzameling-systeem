<script setup>
import {fetchAuthors} from './domains/authors/store';
import {fetchBooks} from './domains/bookcollection/store';

fetchAuthors();
fetchBooks();
</script>

<template>
    <p>
        <strong>Current route path:</strong>
        {{ $route.fullPath }}
    </p>
    <nav>
        <RouterLink to="/">Ga naar Overview</RouterLink>
        <RouterLink to="/create">Nieuw Boek</RouterLink>
        <RouterLink to="/authors">Auteurs</RouterLink>
        <RouterLink to="/authors/create">Nieuw Auteur</RouterLink>
    </nav>
    <RouterView />
</template>
