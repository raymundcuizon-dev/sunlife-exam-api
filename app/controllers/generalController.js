const Asset = require('../models/assetsModel');
const ConveragePolicy = require('../models/ConveragePolicyModel');
const Policy = require('../models/policy'); 
const User = require('../models/userModel');
const PolicyServicing = require('../models/PolicyServicingModel');

exports.findOneUser = async (req, res) => {

  const user = await  User.findOne();
  
  if(!user) {
    return res.status(404).send({
      message: "No user found "
    });            
  }
  return res.send(user);
  
};

exports.createUser = async (req, res) => {

  if(!req.body.name) {
      return res.status(400).send({
          message: "User name can not be empty"
      });
  }

  try {
    const user = new User({
        title: req.body.name || "no name", 
        img: req.body.img
    });

    const response = await user.save();
    return res.send(response);

  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating the user."
    });
  }

};

exports.createPolicy = async (req, res) => {

  try {

    const policy = new Policy(req.body);

    const response = await policy.save();
    return res.send(response);

  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating the policy."
    });
  }

};

exports.findPolicies = async (req, res) => {
  try {
    const policies = await Policy.find();
    return res.send(policies);

  } catch (err) {
    return res.status(500).send({
        message: err.message || "Some error occurred while retrieving policies."
    });
  }
}


exports.createAsset = async (req, res) => {

  try {

    const asset = new Asset(req.body);

    const response = await asset.save();
    return res.send(response);

  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating the asset."
    });
  }

};

exports.findAssets = async (req, res) => {
  try {
    const assets = await Asset.find();
    return res.send(assets);

  } catch (err) {
    return res.status(500).send({
        message: err.message || "Some error occurred while retrieving assets."
    });
  }
}

exports.createCoveragePolicy = async (req, res) => {

  try {
    const cp = new ConveragePolicy(req.body);

    const response = await cp.save();
    return res.send(response);

  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating the cp."
    });
  }

};

exports.findConveragePolicy = async (req, res) => {
  try {
    const cps = await ConveragePolicy.findOne();
    return res.send(cps);

  } catch (err) {
    return res.status(500).send({
        message: err.message || "Some error occurred while retrieving cp."
    });
  }
}

exports.createPolicyServicing = async (req, res) => {
  try {
    const ps = new PolicyServicing(req.body);

    const response = await ps.save();
    return res.send(response);

  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating the ps."
    });
  }
}

exports.findPolicyServicing = async (req, res) => {
  try {
    const ps = await PolicyServicing.find();
    return res.send(ps);

  } catch (err) {
    return res.status(500).send({
        message: err.message || "Some error occurred while retrieving ps."
    });
  }
}
