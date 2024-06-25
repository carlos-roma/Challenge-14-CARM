document.addEventListener('DOMContentLoaded', () => {
    const postList = document.querySelector('.post-list');
    if (postList) {
        const delButtonHandler = async (event) => {
            if (event.target.classList.contains('delete-post')) {
                const id = event.target.getAttribute('data-id');
                console.log(`Delete button clicked for post ID: ${id}`);

                const response = await fetch(`/api/posts/${id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    console.log('Post deleted successfully');
                    document.location.replace('/dashboard');
                } else {
                    console.log('Failed to delete post');
                    alert('Failed to delete post');
                }
            }
        };

        postList.addEventListener('click', delButtonHandler);
    }
});
