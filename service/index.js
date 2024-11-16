const express = require('express');
const fileUpload = require('express-fileupload');
const uuid = require('uuid');
const app = express();

// The profile data and users are saved in memory and disappear whenever the service is restarted.
let users = {};
//Object mapping profile data of each person to their username
let profileData={};/*{
  "e":[{"num":1,"username":"Profile 1","services":["Test 1","Service 2"],"pfpLink":"https://freepngimg.com/thumb/shape/29783-1-circle-hd.png"},{"num":2,"username":"Profile 2","services":["Service 1","Service 2"],"pfpLink":"https://freepngimg.com/thumb/shape/29783-1-circle-hd.png"},{"num":3,"username":"Profile 3","services":["Service 1","Service 2"],"pfpLink":"https://freepngimg.com/thumb/shape/29783-1-circle-hd.png"},{"num":4,"username":"Profile 4","services":["Service 1","Service 2"],"pfpLink":"https://freepngimg.com/thumb/shape/29783-1-circle-hd.png"}]
};*/


// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

app.use(fileUpload({
  // Configure file uploads with maximum file size 5mb
  limits: { fileSize: 5 * 1024 *  1024 }
}));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    users[user.email] = user;

    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

apiRouter.get('/profiles/load/:username',(req, res) => {
  let returnData={data: profileData[req.params.username]};
  res.send(returnData);
});

apiRouter.post('/profiles/set/:username', (req, res) => {
  profileData[req.params.username]=req.body.profiles;
  res.send(profileData);
});

apiRouter.post('/profiles/uploadPfp/:username', function(req, res) {
  let uploadPath;

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send({msg:'No files were uploaded.'});
  }

  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  let sampleFile = req.files.newPfp;
  let storedPath='profilePics\\' + req.params.username +"_"+ sampleFile.name
  uploadPath = __dirname +'\\'+storedPath;

  // Use the mv() method to place the file somewhere on your server.
  sampleFile.mv(uploadPath, function(err) {
    if (err)
      return res.status(500).send(err);

    res.send({path:'service/'+storedPath.replace('\\','/')});
  });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


