module.exports = (app) => {
  const general = require('../controllers/generalController.js');
  app.post('/user-info', general.createUser);
  app.get('/user-info', general.findOneUser);

  app.post('/policy', general.createPolicy);
  app.get('/policies', general.findPolicies);

  app.post('/asset', general.createAsset);
  app.get('/assets', general.findAssets);

  app.post('/coverage-policy', general.createCoveragePolicy);
  app.get('/coverage-policy', general.findConveragePolicy);

  app.post('/policy-servicing', general.createPolicyServicing);
  app.get('/policy-servicing', general.findPolicyServicing);

}