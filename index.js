const express         = require('express');
const app             = express();
const port            = 8081;

app.get('/',(req,res)=>{
  res.send('dicoding aws online.Test Ec2 - route 53');
});



app.listen(port, err => {
    console.log('Magic happens on port awesome ' + port);
});
