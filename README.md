# TAM Challenge Account Linking

This sample uses the [Auth0 React SDK Quickstart](https://auth0.com/docs/quickstart/spa/react). 

This sample demonstrates the following use cases:

- [Login](https://github.com/auth0-samples/auth0-react-samples/blob/master/Sample-01/src/components/#L72-L79)
- [Logout](https://github.com/auth0-samples/auth0-react-samples/blob/master/Sample-01/src/components/NavBar.js#L102-L108)
- [Showing the user profile](https://github.com/auth0-samples/auth0-react-samples/blob/master/Sample-01/src/views/Profile.js)
- [Account Linking using actions](https://github.com/auth0-samples/auth0-react-samples/blob/master/Sample-01/auth0-actions/post-login-action.js)

## Auth0 Configuration

1. Go to [Auth0](https://auth0.com) and click **Sign Up**.
2. Use Google, GitHub, or Microsoft Account to login.
3. Create a **Single Page Application** in the [Auth0 Dashboard](https://manage.auth0.com/#/applications).

> **If you're using an existing application**, verify that you have configured the following settings in your Single Page Application:
>
> - Click on the "Settings" tab of your application's page.
> - Scroll down and click on the "Show Advanced Settings" link.
> - Under "Advanced Settings", click on the "OAuth" tab.
> - Ensure that "JsonWebToken Signature Algorithm" is set to `RS256` and that "OIDC Conformant" is enabled.

Next, configure the following URLs for your application under the "Application URIs" section of the "Settings" page:

- **Allowed Callback URLs**: `http://localhost:3000`
- **Allowed Logout URLs**: `http://localhost:3000`
- **Allowed Web Origins**: `http://localhost:3000`

> These URLs should reflect the origins that your application is running on. **Allowed Callback URLs** may also include a path, depending on where you're handling the callback.

Take note of the **Client ID** and **Domain** values under the "Basic Information" section. You'll need these values in the next step.

## Project setup
Download the react quick start from https://auth0.com/docs/quickstart/spa/react/01-login 
Prerequisite: node should be installed in the machine

Use `yarn` to install the project dependencies:

```bash
yarn install
```

### Configure credentials

The project needs to be configured with your Auth0 domain and client ID in order for the authentication flow to work.

To do this, first copy `src/auth_config.json.example` into a new file in the same folder called `src/auth_config.json`, and replace the values with your own Auth0 application credentials.

```json
{
  "domain": "{YOUR AUTH0 DOMAIN}",
  "clientId": "{YOUR AUTH0 CLIENT ID}"
}
```


## Run the sample
Run `npm install` to set up the environment.

Run `npm start` to point your browser to https://localhost:3000/ to verify the example page works.


## Frequently Asked Questions

If you're having issues running the sample applications, including issues such as users not being authenticated on page refresh, please [check the auth0-react FAQ](https://github.com/auth0/auth0-react/blob/master/FAQ.md).

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple sources](https://auth0.com/docs/identityproviders), either social identity providers such as **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce** (amongst others), or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS, or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://auth0.com/docs/connections/database/custom-db)**.
* Add support for **[linking different user accounts](https://auth0.com/docs/users/user-account-linking)** with the same user.
* Support for generating signed [JSON Web Tokens](https://auth0.com/docs/tokens/json-web-tokens) to call your APIs and **flow the user identity** securely.
* Analytics of how, when, and where users are logging in.
* Pull data from other sources and add it to the user profile through [JavaScript rules](https://auth0.com/docs/rules).