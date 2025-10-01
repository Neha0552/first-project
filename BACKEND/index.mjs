import express from 'express';
import mongoose, { Schema } from 'mongoose';
import cors from 'cors';

// Load .env variables
// dotenv.config();

import dotenv from 'dotenv/config';

const app = express();

const PORT_NUMBER = process.env.PORT_NUMBER;

if(!PORT_NUMBER)
{
  console.error('❌ DEFINE A VALID PORT NUMBER IN .env ENVIRONMENT VARIABLE FILE.');
  process.exit(1);
}

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/LOGIN_DATA')
  .then(() => console.log('✅ DATABASE IS CONNECTED SUCCESSFULLY'))
  .catch((err) => console.error('❌ FAILED TO CONNECT WITH MONGO DB DATABASE', err))
  .finally(() => console.log('ℹ️  ATTEMPT WAS MADE TO CONNECT WITH MONGO DB DATABASE.'));

// User Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    minlength: [4, "Minimum 4 characters required"],
    maxlength: [25, "Maximum 25 characters allowed"],
    trim: true,
    lowercase: true,
    match: [/^[a-zA-Z\s]{4,25}$/, "Enter a valid name"],
  },
  
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, "Minimum 8 characters required"],
    maxlength: [20, "Maximum 20 characters allowed"],
    trim: true,
    match: [/^[A-Za-z0-9!@#%*]+$/, "Invalid password format"],
  },
});

// Model
const User = mongoose.model('User', userSchema, "DATA");

// Login route
// POST route
app.post('/api/v1/login', async (req,res) => {
  try {
    const { username, password } = req.body;
    const newUser = new User({ username,password });

    await newUser.save();

    res.status(201).json({
      message: `✅ Welcome, ${newUser.username}!`,
      username: newUser.username
    });

  } catch (err) {
    res.status(400).json({ message: '❌ Server error', error: err.message });
  }
});
 
// Subscriber Schema 

const subscriberSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"],
  }
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema, "subscribe");

// Subscribe Route
app.post('/api/v2/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    const newSubscriber = new Subscriber({ email });

    await newSubscriber.save();

    res.status(201).json({
      message: `✅ Thank you for subscribing with ${newSubscriber.email}!`,
      email: newSubscriber.email
    });
  } catch (err) {
    res.status(400).json({ message: '❌ Subscription error', error: err.message });
  }
});


// contact us schema

const contactschema = new Schema({
  name:{
    type: String,
    required: [true, 'name is required'],
    minlength: [4, "minimum 4 characters required"],
    maslength: [25, "maximum 25 characters allowed"],
    trim: true,
    lowercase:true,
    match: [/^[a-zA-Z\s]{4,25}$/, "enter a valid name"],
  },
  mobile: {
    type: String,
    required: [true, 'mobile number is required'],
    minlength: [10, "minimum 10 characters required"],
    maxlength: [10, "maximum 10 characters allowed"]
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    trim: true,
    lowercase: true,
    match:[/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Invalid email format"]
  },
  message: {
    type: String,
    required: [true, 'message is required'],
    minlength: [10, "minimum 10 characters required"],
    maxlength: [500, "maximum 500 characters allowed"],
    trim: true,
    match: [/^[a-zA-Z0-9\s.,!?'"-]+$/, "Invalid message format"]
  }
});

const Contact = mongoose.model('Contact', contactschema, "contact");

// Contact us route

app.post('/api/v3/contact', async (req,res) =>{
  try {
    const {name , mobile , email, message} = req.body;
    const newContact = new Contact({ name, mobile, email, message});
    await newContact.save();

    res.status(201).json({
      message: `✅ Thank you for contacting us, ${newContact.name}!`,
      contact: {
        name: newContact.name,
        mobile: newContact.mobile,
        email: newContact.email,
        message: newContact.message
      } 
    });
  }
  catch (err) {
      res.status(400).json({message: '❌ Contact submission error', error: err.message})
    }
})







// Start the server
app.listen(PORT_NUMBER, () => {
  console.log(`🚀 Server is running on port ${PORT_NUMBER}`);
});