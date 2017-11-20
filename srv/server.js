const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const md5 = require('md5'); 

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/auth', (req,res) => {
  if( req.body.email == 'test@test.com' && req.body.password == 'password') {
    console.log(req.body.email, req.body.password);
    res.send({
      email: req.body.email,
      token: md5('letmein')
    });
  } else {
    console.log('404');
    res.status(404).send('');
  }
})

app.post('/password', (req,res) => {
  if( req.body.email.indexOf('@test.com') > -1 ) {
    res.send({
      response: md5('letmein')
    });
  } else {
    console.log('404');
    res.status(404).send('');
  }
})

app.listen(3000, () => console.log('Dummy Server 3000!'))