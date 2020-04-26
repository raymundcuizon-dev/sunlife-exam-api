const mongoose = require('mongoose');

const AssetSchema = mongoose.Schema({
    title: String,
    value: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('Asset', AssetSchema);