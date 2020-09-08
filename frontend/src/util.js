import axios from 'axios';

// Ingredient model
export function ingredientIndex() {
    return axios.get('/api/v1/ingredients')
        .then(response => response.data)
}

export function createIngredient(newIngredient) {
    return axios.post('api/v1/ingredients', newIngredient)
        .then(response => response.data)
}

export function updateIngredient(ingredientId, ingredient) {
    return axios.put(`api/v1/ingredients/${ingredientId}/`, ingredient)
        .then(response => response.data)
}

export function deleteIngredient(ingredientId) {
    return axios.delete(`api/v1/ingredients/${ingredientId}/`)
        .then(response => response.data)
}

// Effect model
export function effectIndex() {
    return axios.get('/api/v1/effects')
        .then(response => response.data)
}

export function createEffect(newEffect) {
    return axios.post('api/v1/effects', newEffect)
        .then(response => response.data)
}

export function updateEffect(effectId, effect) {
    return axios.put(`/api/v1/effects/${effectId}/`, effect)
        .then(response => response.data)
}

export function deleteEffect(effectId) {
    return axios.delete(`/api/v1/effects/${effectId}/`)
        .then(response => response.data)
}