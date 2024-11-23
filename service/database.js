const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });
const db = client.db('profiler');
const userCollection = db.collection('user');
const profileCollection = db.collection('profile');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}

async function modifyProfile(profile, owner) {
  let existingProfile = await getProfile(owner);
  if(existingProfile.length>0){
    const query={owner:owner};
    const updateDocument = {
      $set: {
         data: profile,
      },
   };
    profileCollection.updateOne(query,updateDocument);
  }
  else{
    //Username doesn't exist yet, add a profile spot for them
    return profileCollection.insertOne({data:profile,owner:owner});
  }
}

function getProfile(username) {
  const query = { owner: username };
  const options = {
    maxlimit: 1
  };
  const cursor = profileCollection.find(query, options);
  return cursor.toArray();
}

module.exports = {
  getUser,
  getUserByToken,
  createUser,
  modifyProfile,
  getProfile,
};