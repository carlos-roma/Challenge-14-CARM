document.querySelector('#create-new-post').addEventListener('click', () => {
  document.location.replace('/create');
});

document.querySelectorAll('.edit-post').forEach((button) => {
  button.addEventListener('click', async (event) => {
    const id = event.target.closest('.post').getAttribute('data-id');
    document.location.replace(`/edit/${id}`);
  });
});

document.querySelectorAll('.delete-post').forEach((button) => {
  button.addEventListener('click', async (event) => {
    const id = event.target.closest('.post').getAttribute('data-id');
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post.');
    }
  });
});
