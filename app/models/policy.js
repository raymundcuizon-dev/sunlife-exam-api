const mongoose = require('mongoose');


const fund = mongoose.Schema({
  title: String,
  value: Number,
}, {
  timestamps: true
})

const PolicySchema = mongoose.Schema({
  title: String,
  policyno: String,
  status: String,
  premium: Boolean,
  premiumText: String,
  funds: [fund]
}, {
    timestamps: true
});

module.exports = mongoose.model('Policy', PolicySchema);