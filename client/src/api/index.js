import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

export const insertCategory = payload => api.post(`/category`, payload)
export const getAllCategory = () => api.get(`/category`)
export const updateCategoryById = (id, payload) => api.put(`/category/${id}`, payload)
export const deleteCategoryById = id => api.delete(`/category/${id}`)
export const getCategoryById = id => api.get(`/category/${id}`)

export const insertSong = payload => api.post(`/song`, payload)
export const getAllSong = () => api.get(`/song`)
export const updateSongById = (id, payload) => api.put(`/song/${id}`, payload)
export const deleteSongById = id => api.delete(`/song/${id}`)
export const getSongById = id => api.get(`/song/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
    insertCategory,
    getAllCategory,
    updateCategoryById,
    deleteCategoryById,
    getCategoryById,
    insertSong,
    getAllSong,
    updateSongById,
    deleteSongById,
    getSongById
}

export default apis
