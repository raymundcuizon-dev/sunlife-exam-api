const mongoose = require('mongoose');
const dbConfig = require('./database.config.js');

function connect() {
  return new Promise((resolve, reject) => {

    if (process.env.NODE_ENV === 'test') {
      const Mockgoose = require('mockgoose').Mockgoose;
      const mockgoose = new Mockgoose(mongoose);

      mockgoose.prepareStorage()
        .then(() => {
          mongoose.connect(dbConfig.url,
            { 
              useUnifiedTopology: true,
              useNewUrlParser: true,
              useFindAndModify: false  
            })
            .then((res, err) => {
              if (err) return reject(err);
              resolve();
            })
        })
    } else {
        mongoose.connect(dbConfig.url,
          { 
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false  
          })
          .then((res, err) => {
            if (err) return reject(err);
            resolve();
          })
    }
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };