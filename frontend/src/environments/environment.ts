/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'https://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-p2nopehd.eu.auth0.com', // the auth0 domain prefix
    audience: 'cshop-api', // the audience set for the auth0 app
    clientId: '6322cac39ecec0b9aeed3523', // the client id generated for the auth0 app
    callbackURL: 'https://127.0.0.1:8100', // the base url of the running ionic application. 
  }
};
