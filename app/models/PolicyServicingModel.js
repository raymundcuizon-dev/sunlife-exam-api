const mongoose = require('mongoose');

const policyValue = mongoose.Schema({
  title: String,
  value: String
});

const policies = mongoose.Schema({
  title: String,
  expanded: Boolean,
  values: [policyValue]
});

const PolicyServicingSchema = mongoose.Schema({
    icon: String,
    title: String,
    policies: [policies]
}, {
    timestamps: true
});

module.exports = mongoose.model('PolicyServicing', PolicyServicingSchema);