const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere',
    content: 'vestibulum eget, vulputate ut, ultrices vel, augue',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec',
    content: 'non quam nec dui luctus rutrum.',
    user_id: 2
  },
  {
    title: 'Donec ',
    content: 'Nunc purus, vestibulum eget, vulputate ut, ultrices vel, augue',
    user_id: 3
  },
  {
    title: 'Donec ',
    content: 'Nunc purus, vestibulum eget, vulputate ut, ultrices vel, augue',
    user_id: 4
  },
  {
    title: 'Donec ',
    content: 'Nunc purus, vestibulum eget, vulputate ut, ultrices vel, augue',
    user_id: 5
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
