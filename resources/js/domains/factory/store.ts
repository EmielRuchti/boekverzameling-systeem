import {computed, ref} from 'vue';
import {deleteRequest, getRequest, postRequest, updateRequest} from '../../services/http';

export const storeModuleFactory = (moduleName: string) => {
    const state: any = ref([]);

    const getters = {
        all: computed(() => Object.values(state.value)),
        byId: (id: number) => computed(() => state.value[id]),
    };

    const setters = {
        setAll: (items: any) => {
            items.forEach((item: any) => {
                state.value[item.id] = item;
            });
        },

        setById: (item: any) => {
            state.value[item.id] = item;
        },

        deleteById: (id: number) => {
            delete state.value[id];
        },
    };

    const actions = {
        getAll: async () => {
            const {data} = await getRequest(moduleName);
            if (!data) return;
            setters.setAll(data);
        },

        create: async (item: any) => {
            const {data} = await postRequest(moduleName, item);
            if (!data) return;
            setters.setById(data);
        },

        deleteItemById: async (id: number) => {
            const response = await deleteRequest(moduleName + '/' + id);
            if (!response) return;
            setters.deleteById(id);
        },

        update: async (item: any) => {
            const {data} = await updateRequest(moduleName, item);
            if (!data) return;
            setters.setById(data);
        },
    };

    return {
        getters,
        actions,
    };
};
