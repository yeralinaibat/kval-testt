const express = require('express');
const cors = require('cors')
const router = require('./router');


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api', router);


const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/kvalTest').then(() => {
    console.log("Success");
  }).catch((e) => {
    console.log(e);
  });
}
main().catch(err => console.log(err));

app.listen(5000, ()=>{
  console.log('server started on port 5000');
})







