const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const md5 = require('md5'); 
const moment = require('moment');

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

app.get('/activity', (req,res) => {
  res.send({
    activity: [
      { login: moment().subtract(2, 'days').format('l'), logout: moment().subtract(1, 'days').format('l') },
      { login: moment().subtract(5, 'days').format('l'), logout: moment().subtract(4, 'days').format('l') },
      { login: moment().subtract(10, 'days').format('l'), logout: moment().subtract(9, 'days').format('l') },
      { login: moment().subtract(15, 'days').format('l'), logout: moment().subtract(14, 'days').format('l') },
      { login: moment().subtract(18, 'days').format('l'), logout: moment().subtract(16, 'days').format('l') },
      { login: moment().subtract(22, 'days').format('l'), logout: moment().subtract(21, 'days').format('l') },
    ]
  })
})

app.listen(3000, () => console.log('Dummy Server 3000!'))