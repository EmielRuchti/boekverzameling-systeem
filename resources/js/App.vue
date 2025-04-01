<script setup>
import {authorStore} from './domains/authors/store';
import {bookStore} from './domains/bookcollection/store';

authorStore.actions.getAll();
bookStore.actions.getAll();
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
        <RouterLink to="/login">Login</RouterLink>
    </nav>
    <RouterView />
</template>
