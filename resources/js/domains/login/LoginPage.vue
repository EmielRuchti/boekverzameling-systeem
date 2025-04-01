<script setup lang="ts">
import {getRequest, postRequest} from '../../services/http';
import Form from './components/Form.vue';
import {useRouter} from 'vue-router';
import axios from 'axios';
import {ref} from 'vue';

const login = {email: '', password: ''};
const router = useRouter();
const user = ref('');

const getUser = async () => {
    const {data} = await getRequest('me');
    if (!data) return;
    user.value = data;
};

const handleLogin = async (login: {email: string; password: string}) => {
    await axios.get('/sanctum/csrf-cookie').then(response => {
        // Login...
    });
    const {data} = await postRequest('login', login);
    if (!data) return;
    //router.push({path: '/'});
};
</script>

<template>
    <button
        @click="getUser"
        class="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
        /Me
    </button>
    {{ user }}
    <Form :login="login" @newLogin="handleLogin"></Form>
</template>
