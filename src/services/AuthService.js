import auth0 from 'auth0-js';

/**
 * Auth Service - interface to 
 * Auth0 services to handle authentication
 */
class AuthService {

  /** constructor */
  constructor(){
    this.auth0 = new auth0.WebAuth({
      domain: 'kelseyvaughn.auth0.com',
      clientID: '**************************',
      redirectUri: 'http://localhost:3000/api/callback',
      audience: 'https://kelseyvaughn.auth0.com/userinfo',
      responseType: 'token id_token',
      scope: 'openid'
    }); 
  }

  /** perform login of the user */
  login() {
    this.auth0.authorize();
  }
}

export default AuthService;