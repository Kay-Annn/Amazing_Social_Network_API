const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing User
  await User.deleteMany({});

  // Drop existing Thought
  await Thought.deleteMany({});

  // Create empty array to hold the thoughts
  const thoughts = [];

//   Loop 20 times -- add thoughts to the thoughts array
//   for (let i = 0; i < 20; i++) {
//     // Get some random assignment objects using a helper function that we imported from ./data
//     const assignments = getRandomAssignments(20);

//     const fullName = getRandomName();
//     const first = fullName.split(' ')[0];
//     const last = fullName.split(' ')[1];
//     const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

//     thoughts.push({
//       thoughtText,
//     });
//   }

  // Add thoughts to the collection and await the results
  await Thought.collection.insertMany(Thought);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertOne({
    thoughtText: 'I am seeding my database',
    thought: [...thought],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(Thought);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
