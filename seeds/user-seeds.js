
const  {User}= require('../models');

const userdata = [
  {
    username: 'maddi',
    email: 'nwestnedge0@cbc.ca',
    password: 'password'
  },
  {
    username: 'john',
    email: 'rmebes1@sogou.com',
    password: 'way1234'
  },
  {
    username: 'maria',
    email: 'cstoneman2@last.fm',
    password: 'maria12'
  },
  {
    username: 'benny',
    email: 'ihellier3@goo.ne.jp',
    password: 'benny124'
  },
  {
    username: 'chalo',
    email: 'gmidgley4@weather.com',
    password: 'Gon1234'
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
