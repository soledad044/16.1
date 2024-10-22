const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

async function fetchPosts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Error en la conexión');
        const data = await response.json();
        displayPosts(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayPosts(posts) {
    const postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    posts.slice(0, 5).forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
        postsDiv.appendChild(postDiv);
    });
}

document.getElementById('loadPosts').addEventListener('click', () => {
    fetchPosts();
    document.getElementById('hidePosts').style.display = 'block';
    document.getElementById('loadPosts').style.display = 'none';
});

document.getElementById('hidePosts').addEventListener('click', () => {
    document.getElementById('posts').innerHTML = '';
    document.getElementById('hidePosts').style.display = 'none';
    document.getElementById('loadPosts').style.display = 'block';
});
