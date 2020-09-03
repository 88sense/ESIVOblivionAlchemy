import axios from 'axios';

// Ingredient model

export function ingredientIndex() {
    return axios.get('/api/v1/ingredients')
    .then(response => response.data)
}


// Effect model

export function effectIndex() {
    return axios.get('/api/v1/effects')
    .then(response => response.data)
}