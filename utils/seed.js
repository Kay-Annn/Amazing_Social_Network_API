const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomName, getRandomAssignments } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing users
  await User.deleteMany({});

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Create empty array to hold the thoughts
  const thoughts = [];

  // Loop 20 times -- add thoughts to the thoughts array
  for (let i = 0; i < 20; i++) {
    // Get some random assignment objects using a helper function that we imported from ./data
    const assignments = getRandomAssignments(20);

    const fullName = getRandomName();
    const first = fullName.split(' ')[0];
    const last = fullName.split(' ')[1];
    const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

    thoughts.push({
      thoughtText,
      last,
    });
  }

  // Add students to the collection and await the results
  await Thoughts.collection.insertMany(thoughts);

  // Add courses to the collection and await the results
  await User.collection.insertOne({
    username: 'Justin',
    email: 'justin@justin.com',
    thoughts: [...thoughts],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
