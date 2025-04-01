<script setup>
import {authorStore} from './domains/authors/store';
import {bookStore} from './domains/bookcollection/store';
import {getRequest} from './services/http';

authorStore.actions.getAll();
bookStore.actions.getAll();

const logout = async () => {
    const response = await getRequest('logout');
    if (!response) return;
};
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
        <a @click="logout">Logout</a>
    </nav>
    <RouterView />
</template>
