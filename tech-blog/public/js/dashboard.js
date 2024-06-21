document.querySelector('#new-post').addEventListener('click', () => {
  document.querySelector('#post-form').style.display = 'block';
});

const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const content = document.querySelector('#content').value.trim();

  if (title && content) {
    try {
      console.log('Sending new post:', { title, content });

      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        console.log('Post created successfully');
        document.location.replace('/dashboard');
      } else {
        console.log('Failed to create post');
        alert('Failed to create post.');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }
};

document.querySelector('#new-post-form').addEventListener('submit', newPostFormHandler);

const deletePostHandler = async (event) => {
  if (event.target.classList.contains('delete-post')) {
    const id = event.target.getAttribute('data-id');

    try {
      console.log('Deleting post with id:', id);

      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log('Post deleted successfully');
        document.location.replace('/dashboard');
      } else {
        console.log('Failed to delete post');
        alert('Failed to delete post.');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  }
};

const editPostHandler = async (event) => {
  if (event.target.classList.contains('edit-post')) {
    const id = event.target.getAttribute('data-id');
    // Implement edit functionality here if needed
  }
};

document.querySelectorAll('.delete-post').forEach((button) => {
  button.addEventListener('click', deletePostHandler);
});

document.querySelectorAll('.edit-post').forEach((button) => {
  button.addEventListener('click', editPostHandler);
});
