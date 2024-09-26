const mongoose = require('mongoose');
require("dotenv").config();


const connection = async ( )=>{
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("Databse connected ",conn.connection.host);
}
connection();


const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    issuedBooks: [{
        bookName: String,
    }],
    numberOfIssuedBooks: Number,
    signedIn: Boolean
});

const User = new mongoose.model("User", userSchema);

module.exports = User;