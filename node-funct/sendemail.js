var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'be.rightmuk@gmail.com',
    //password hidden
    pass: '##########'
  }
});

var mailOptions = {
  from: 'be.rightmuk@gmail.com',
  to: 'bellionmuk@gmail.com',//you can add multiple receivers here
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
  //you can also send html email
  //html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});