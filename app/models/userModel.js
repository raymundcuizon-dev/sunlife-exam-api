const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    img: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);