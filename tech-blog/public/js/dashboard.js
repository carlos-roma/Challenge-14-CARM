document.querySelector('#new-post').addEventListener('click', () => {
    document.querySelector('#post-form').style.display = 'block';
  });
  
  const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post.');
      }
    }
  };
  
  document.querySelector('#new-post-form').addEventListener('submit', newPostFormHandler);
  
  const deletePostHandler = async (event) => {
    if (event.target.classList.contains('delete-post')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post.');
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
  