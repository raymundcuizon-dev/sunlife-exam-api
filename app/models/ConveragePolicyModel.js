const mongoose = require('mongoose');

const ConveragePolicySchema = mongoose.Schema({
    life: String,
    critical: String,
    medical: String,
    accident: String
}, {
    timestamps: true
});

module.exports = mongoose.model('ConveragePolicy', ConveragePolicySchema);