document.addEventListener('DOMContentLoaded', () => {
  // Show the new post form when the button is clicked
  const newPostButton = document.querySelector('#new-post');
  if (newPostButton) {
    newPostButton.addEventListener('click', () => {
      document.querySelector('#post-form').style.display = 'block';
    });
  }

  // Handle new post form submission
  const newPostForm = document.querySelector('#post-form');
  if (newPostForm) {
    newPostForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const title = document.querySelector('#title').value.trim();
      const content = document.querySelector('#content').value.trim();

      if (title && content) {
        try {
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
        } catch (error) {
          console.error('Error creating post:', error);
        }
      }
    });
  }

  // Handle post deletion
  const deletePostButtons = document.querySelectorAll('.delete-post');
  deletePostButtons.forEach((button) => {
    button.addEventListener('click', async (event) => {
      const id = event.target.getAttribute('data-id');

      try {
        const response = await fetch(`/api/posts/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to delete post.');
        }
      } catch (error) {
        console.error('Error deleting post:', error);
      }
    });
  });

  // Handle post editing
  const editPostButtons = document.querySelectorAll('.edit-post');
  editPostButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const id = event.target.getAttribute('data-id');
      const postTitle = event.target.parentElement.querySelector('h3').innerText;
      const postContent = event.target.parentElement.querySelector('p').innerText;

      document.querySelector('#edit-id').value = id;
      document.querySelector('#edit-title').value = postTitle;
      document.querySelector('#edit-content').value = postContent;
      document.querySelector('#edit-form').style.display = 'block';
    });
  });

  // Handle edit form submission
  const editForm = document.querySelector('#edit-form');
  if (editForm) {
    editForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const id = document.querySelector('#edit-id').value;
      const title = document.querySelector('#edit-title').value.trim();
      const content = document.querySelector('#edit-content').value.trim();

      if (title && content) {
        try {
          const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
          });

          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to update post.');
          }
        } catch (error) {
          console.error('Error updating post:', error);
        }
      }
    });
  }
});
