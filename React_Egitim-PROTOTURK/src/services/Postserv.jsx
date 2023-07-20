import { get, post, postJSON } from "./Request";


export const getPosts = () => get('https://jsonplaceholder.typicode.com/posts')

export const getPostDetail = id => get(`https://jsonplaceholder.typicode.com/posts/${id}`)

export const newPostJSON = data => postJSON(`https://jsonplaceholder.typicode.com/posts`, data)

export const newPost = data => post(`https://jsonplaceholder.typicode.com/posts`, data)








