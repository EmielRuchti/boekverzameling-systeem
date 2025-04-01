<script setup lang="ts">
import {postRequest} from '../../services/http';
import Form from './components/Form.vue';
import {useRouter} from 'vue-router';
import axios from 'axios';

const login = {email: '', password: ''};
const router = useRouter();

const handleLogin = async (login: {email: string; password: string}) => {
    await axios.get('/sanctum/csrf-cookie').then(response => {
        // Login...
    });
    const {data} = await postRequest('login', login);
    if (!data) return;
    router.push({path: '/'});
};
</script>

<template>
    <Form :login="login" @newLogin="handleLogin"></Form>
</template>
