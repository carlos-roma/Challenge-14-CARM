document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.querySelector('.comment-form');
    if (commentForm) {
        const commentFormHandler = async (event) => {
            event.preventDefault();
            console.log('Form submitted');

            const commentTextElem = document.querySelector('textarea[name="comment-body"]');
            if (commentTextElem) {
                const content = commentTextElem.value.trim();
                console.log('Comment content:', content);
                const post_id = window.location.toString().split('/').pop();
                console.log('Post ID:', post_id);

                if (content) {
                    try {
                        const response = await fetch('/api/comments', {
                            method: 'POST',
                            body: JSON.stringify({ content, post_id }),
                            headers: { 'Content-Type': 'application/json' },
                        });

                        if (response.ok) {
                            console.log('Comment added successfully');
                            document.location.reload();
                        } else {
                            console.log('Failed to add comment:', response.statusText);
                            alert('Failed to add comment');
                        }
                    } catch (err) {
                        console.error('Error adding comment:', err);
                        alert('Failed to add comment');
                    }
                } else {
                    alert('Comment content cannot be empty');
                }
            } else {
                console.log('Comment text element not found');
            }
        };

        commentForm.addEventListener('submit', commentFormHandler);
    } else {
        console.log('Comment form not found');
    }
});
