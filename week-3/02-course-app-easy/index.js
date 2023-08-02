const express = require('express');
const bodyParser=require(body-parser);
const app = express();

app.use(express.json());
app.use(bodyParser.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];

// Admin routes
app.post('/admin/signup', (req, res) => {
  // logic to sign up admin
  let username=req.body.username;
  let password=req.body.password;
  // const {username,password}=req.body;
  if(!username || !password){
    return res.status(400).json({error:'Username and password are required.'});
  }
  let existAdmin=ADMINS.find(admin=>admin.username===username);
if(!existAdmin){
  const newAdmin={
    username:username,
    password:password
  }
  ADMINS.push(newAdmin);
  return res.status(201).json({ message: 'Admin created successfully' });
}
else{
  return res.status(409).json({ error: 'Admin with the same username already exists.' });
}
});

app.post('/admin/login', (req, res) => {
  // logic to log in admin
  const username=req.body.username;
  const password=req.body.password;
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }
  const AdminExist=ADMINS.find(admin=>admin.username===username);
  if(!AdminExist){
    return res.status(404).json({error:'Admin does not exist'});
  }
  if(AdminExist.password!=password){
    return res.status(401).json({error:'Invalid Password'});
  }
  return res.status(200).json({message:'Logged in successfully'});
});

app.post('/admin/courses', (req, res) => {
  // logic to create a course
  const title=req.body.title;
  const description = req.body.description ;
  const price=req.body.price;
  const imageLink=req.body.imageLink;
   const courseExist=COURSES.find(course=>course.title===title);
    if(courseExist){
      return res.status(409).json({error:'Course already Exist'});
    }
    const newCourse={
      title:title,
      description : description ,
      price:price
    }
    COURSES.push(newCourse);
    return res.status(200).json({message:'Course created successfully'})
});

app.put('/admin/courses/:courseId', (req, res) => {
  // logic to edit a course
});

app.get('/admin/courses', (req, res) => {
  // logic to get all courses
});

// User routes
app.post('/users/signup', (req, res) => {
  // logic to sign up user
});

app.post('/users/login', (req, res) => {
  // logic to log in user
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
