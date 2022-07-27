var express = require('express');
var router = express.Router();
const { uuid } = require("uuidv4");
const userList = [{
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "jd@gmail.com"
    }];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/post-message", (req, res) => {
  try {
    const clientMessage = req.body.clientMessage;
    const dateTime = new Date();
    const response = `Recieved client message: ${clientMessage}. Responded at ${dateTime.toString()}`;
    res.json({ serverMessage: response }).status(200);
  } catch (error) {
    res.json({ serverMessage: error }).status(400);
  }
});


router.get("/get-users", (req,res) => {
  res.json(userList)
})




router.post("/create-user", function (req, res, next) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const id = uuid();

  const newUser = {
    id,
    firstName,
    lastName,
    email,
  };
  userList.push(newUser);
  res.status(200).json(userList);
});

module.exports = router;
