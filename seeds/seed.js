const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = [
  {
    username: 'techguy',
    password: 'password123',
  },
  {
    username: 'gamerchick',
    password: 'password123',
  },
  {
    username: 'aimaster',
    password: 'password123',
  },
];

const postData = [
  {
    title: 'Latest in AI Technology',
    content: 'AI is evolving rapidly and transforming industries...',
    userId: 3,
  },
  {
    title: 'Top 10 Video Games of 2024',
    content: 'Here are the top 10 video games you must play this year...',
    userId: 2,
  },
  {
    title: 'Tech Innovations to Watch',
    content: 'The tech industry is booming with new innovations...',
    userId: 1,
  },
];

const commentData = [
  {
    content: 'Great insights on AI!',
    userId: 1,
    postId: 1,
  },
  {
    content: 'I love these game recommendations.',
    userId: 2,
    postId: 2,
  },
  {
    content: 'Tech is indeed advancing rapidly.',
    userId: 3,
    postId: 3,
  },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postData);
  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
