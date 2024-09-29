const mongoose = require('mongoose');
require('dotenv').config(); // Add this to load environment variables

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB successfully');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

const userScehma = mongoose.Schema({
    name:String,
    number: { type: Number, unique: true },
    password:String,
    posts:[
        { type:mongoose.Schema.Types.ObjectId, ref:'post' }
    ]
})

module.exports = mongoose.model('user',userScehma);