const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    console.log('Received request to add comment:', req.body); // debugging
    try {
        if (!req.body.content || !req.body.post_id) {
            res.status(400).json({ message: 'Comment content and post ID are required' });
            return;
        }

        const newComment = await Comment.create({
            content: req.body.content,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        console.error('Error while creating comment:', err); // for debugging
        res.status(500).json({ message: 'An error occurred while creating the comment', error: err });
    }
});

module.exports = router;
