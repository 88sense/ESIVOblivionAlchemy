import axios from 'axios';

// Ingredient model
// reduce to data for error validation
export function ingredientIndex() {
    return axios.get('/api/v1/ingredients')
        .then(response => response.data)
}

export function createIngredient(newIngredient) {
    return axios.post('api/v1/ingredients', newIngredient)
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