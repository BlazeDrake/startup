const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const fileUpload = require('express-fileupload');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

const authCookieName = 'token';

//Object mapping profile data of each person to their username
let profileData={};/*{
  "e":[{"num":1,"username":"Profile 1","services":["Test 1","Service 2"],"pfpLink":"https://freepngimg.com/thumb/shape/29783-1-circle-hd.png"},{"num":2,"username":"Profile 2","services":["Service 1","Service 2"],"pfpLink":"https://freepngimg.com/thumb/shape/29783-1-circle-hd.png"},{"num":3,"username":"Profile 3","services":["Service 1","Service 2"],"pfpLink":"https://freepngimg.com/thumb/shape/29783-1-circle-hd.png"},{"num":4,"username":"Profile 4","services":["Service 1","Service 2"],"pfpLink":"https://freepngimg.com/thumb/shape/29783-1-circle-hd.png"}]
};*/


// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

app.use(fileUpload({
  // Configure file uploads with maximum file size 5mb
  limits: { fileSize: 5 * 1024 *  1024 }
}));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});


// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

secureApiRouter.get('/profiles/load/:username',async (req, res) => {
  const returnData= await DB.getProfile(req.params.username);
  res.send(returnData[0]);
});

secureApiRouter.post('/profiles/set/:username', (req, res) => {
  DB.modifyProfile(req.body.profiles,req.params.username);
  res.send(req.body.profiles);
});

secureApiRouter.post('/profiles/uploadPfp/:username', function(req, res) {
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

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


peerProxy(httpService);

