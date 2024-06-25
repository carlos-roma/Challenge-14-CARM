const editFormHandler = async (event) => {
    event.preventDefault();
    
    console.log('Form submission detected'); // Add console log to verify
  
    const title = document.querySelector('input[name="title"]').value.trim();
    const content = document.querySelector('textarea[name="content"]').value.trim();
    const id = window.location.pathname.split('/').pop();
  
    if (title && content) {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  };
  
  document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
  