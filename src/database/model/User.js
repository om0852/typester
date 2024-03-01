const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: { type: String, reqired: true },
    userName: { type: String },
    email: { type: String, reqired: true, unique: true },
    password: { type: String, reqired: true },
    alterEmail: { type: String, require: true },
    level: { type: Number, default: 1 },
    experience: { type: Number, default: 1 },
    address: { type: String, default: "" },
    phoneNo: { type: String, default: "" },
    pincode: { type: Number },
    pic: { type: String },
    CollegeName: { type: String },
    FriendList: { type: Array }
}, { timestamps: true })

mongoose.models = {}
export default mongoose.model("User", UserSchema);