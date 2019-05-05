/* eslint-disable global-require */

if (process.env.NODE_ENV === 'production') {
  // we are in production
  module.exports = require('./prod');
} else {
  // development
  module.exports = require('./dev');
}

/**
 * Heroku
 *  protected-temple-81987
    https://protected-temple-81987.herokuapp.com/ | https://git.heroku.com/protected-temple-81987.git
 *
 *
 */


/**
 *  PROD KEYS
 *  DB USER: emaily-prod
 *  PASSWORD: pLAw9Z2c4tWz8Gp
 *
 *  MLAB URL: mongodb://emaily-prod:pLAw9Z2c4tWz8Gp@ds231951.mlab.com:31951/emaily-prod
 *
 *
 * google oauth client id: 814616894568-ttp4d0eul76qo5km99oqnbo8mrtd66jo.apps.googleusercontent.com
 * secret: NffvtWcUgtOQPsaYVTEo8oH5
 *
 * */