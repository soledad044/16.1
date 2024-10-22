// URL del API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Función para obtener datos
async function fetchPosts() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Error en la conexión');
        const data = await response.json();
        displayPosts(data); // Llamar a la función para mostrar los datos
    } catch (error) {
        console.error('Error:', error);
    }
}

// Función para mostrar los datos en el HTML
function displayPosts(posts) {
    const apiDataDiv = document.getElementById('api-data');
    apiDataDiv.innerHTML = ''; // Limpiar datos anteriores
    posts.slice(0, 5).forEach(post => { // Mostrar solo los primeros 5 posts
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        apiDataDiv.appendChild(postDiv);
    });
}

// Añadir evento al botón
document.getElementById('fetch-button').addEventListener('click', fetchPosts);
