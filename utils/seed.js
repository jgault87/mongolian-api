const connection = require('../config/connection');
const { User, Thought } = require("../models");
// const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  //create seed data for users and thoughts
  const thoughts = [
   {
    thoughtText: 'wine is good for you',
    username: 'bethsmith'
   },
   {
    thoughtText: 'destroying cities is good for you',
    username: 'godzilla'
   },
   {
    thoughtText: 'hiking is good for you',
    username: 'jgault'
   },
   {
    thoughtText: 'crying is good for you',
    username: 'theonetruemorty'
   },
   {
    thoughtText: 'climbing is good for you',
    username: 'kingkong'
   },
   {
    thoughtText: 'adventure is good for you',
    username: 'summersmith'
   },
   {
    thoughtText: 'inventing is good for you',
    username: 'ricksanchez'
   }
  ];

  const users = [
    {
      username: 'jgault',
      email: 'jgault@gmail.com'
    },
    {
      username: 'godzilla',
      email: 'godzilla@gmail.com'
    },
    {
      username: 'kingkong',
      email: 'kingkong@gmail.com'
    },
    {
      username: 'theonetruemorty',
      email: 'theonetruemorty@gmail.com'
    },
    {
      username: 'ricksanchez',
      email: 'ricksanchez@gmail.com'
    },
    {
      username: 'bethsmith',
      email: 'bethsmith@gmail.com'
    },
    {
      username: 'summersmith',
      email: 'summersmith@gmail.com'
    },
  ];
  // Add students to the collection and await the results
  await User.collection.insertMany(users);

  // Add courses to the collection and await the results
  await Thought.collection.insertMany(thoughts);

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
