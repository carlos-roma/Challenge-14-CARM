const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = [
  {
    username: 'JohnDoe',
    email: 'john@example.com',
    password: 'password123',
  },
  {
    username: 'JaneDoe',
    email: 'jane@example.com',
    password: 'password123',
  },
  {
    username: 'CarlosHernandez',
    email: 'carlos@example.com',
    password: 'password789',
  },
  {
    username: 'AishaKhan',
    email: 'aisha@example.com',
    password: 'password101',
  },
  {
    username: 'LingWei',
    email: 'ling@example.com',
    password: 'password202',
  },
  {
    username: 'FatimaZahra',
    email: 'fatima@example.com',
    password: 'password303',
  },
  {
    username: 'YukiTanaka',
    email: 'yuki@example.com',
    password: 'password404',
  },
  {
    username: 'OlgaIvanova',
    email: 'olga@example.com',
    password: 'password505',
  },
];

const postData = [
  {
    title: 'The Future of AI in Gaming',
    content: 'Artificial Intelligence (AI) is transforming the gaming industry by creating more realistic and adaptive game environments. From NPC behavior to procedural content generation, AI is set to revolutionize how games are developed and played.',
    user_id: 1,
  },
  {
    title: 'Top 10 Video Games of 2024',
    content: '2024 has been a fantastic year for gamers, with several blockbuster titles being released. Our top picks include "CyberQuest 2077", "Fantasy Realm", and "Battlefield Infinite". Each of these games offers something unique and has set new benchmarks in the gaming industry.',
    user_id: 2,
  },
  {
    title: 'The Rise of Indie Games',
    content: 'Indie games have taken the gaming world by storm. With platforms like Steam and the Nintendo eShop, indie developers have more opportunities than ever to showcase their creativity. Titles like "Stardew Valley" and "Hades" have proven that indie games can achieve mainstream success.',
    user_id: 3,
  },
  {
    title: 'Virtual Reality: The Next Frontier in Gaming',
    content: 'Virtual Reality (VR) is no longer a distant dream. With advancements in technology, VR is becoming more accessible to gamers worldwide. The immersive experiences provided by VR are unparalleled, and games like "Half-Life: Alyx" are leading the charge.',
    user_id: 4,
  },
  {
    title: 'Blockchain Technology in Video Games',
    content: 'Blockchain technology is finding its way into the gaming industry. From decentralized in-game currencies to unique, tradeable in-game items, blockchain offers new possibilities for game developers and players alike.',
    user_id: 5,
  },
  {
    title: 'Esports: A Billion-Dollar Industry',
    content: 'Esports has grown into a billion-dollar industry, attracting millions of viewers and offering lucrative opportunities for players and sponsors. Games like "League of Legends" and "Fortnite" are at the forefront of this phenomenon.',
    user_id: 6,
  },
  {
    title: 'Game Development in Japan',
    content: 'Japan has a rich history of game development, with iconic franchises like "Final Fantasy" and "The Legend of Zelda". Japanese developers continue to innovate and influence the global gaming industry.',
    user_id: 7,
  },
  {
    title: 'Women in Gaming: Breaking Barriers',
    content: 'The gaming industry is seeing more women in prominent roles, both as developers and players. This shift is helping to create more diverse and inclusive gaming experiences.',
    user_id: 8,
  },
];

const commentData = [
  {
    comment_text: 'This is amazing! AI will definitely change gaming forever.',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: 'I love the new releases this year! Can\'t wait to try them all.',
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: 'Indie games are my favorite. They have so much creativity.',
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: 'VR gaming is the future! I am excited to see what comes next.',
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text: 'Blockchain in gaming? Sounds interesting!',
    user_id: 5,
    post_id: 5,
  },
  {
    comment_text: 'Esports has really taken off! Great time to be a gamer.',
    user_id: 6,
    post_id: 6,
  },
  {
    comment_text: 'Japanese games are always so unique and innovative!',
    user_id: 7,
    post_id: 7,
  },
  {
    comment_text: 'It’s inspiring to see more women in gaming.',
    user_id: 8,
    post_id: 8,
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
