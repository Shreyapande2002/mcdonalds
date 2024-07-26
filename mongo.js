const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/LoginDB")
.then(() => {
console.log("MongoDB connected");
})
.catch((error) => {
console.error("Failed to connect to MongoDB:", error);
});
const userSchema = new mongoose.Schema({
firstName: {
type: String,
required: true
},
lastName: {
type: String,
required: true
},
email: {
type: String,
required: true,
unique: true // Ensures email uniqueness
},
password: {
type: String,
required: true
},
phoneNo: {
type: String,
required: true
}
});
const User = mongoose.model("User", userSchema);
module.exports = User;