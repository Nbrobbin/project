const newPost = (post, addedAt = Date ()) => ({
    ...post,
    addedAt,
})
const firstPost = {
    id: 1,
    author: 'Pablo',
}


console.log (newPost)
