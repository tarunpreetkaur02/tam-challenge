# TAM Challenge Account Linking

This sample uses the [Auth0 React SDK Quickstart](https://auth0.com/docs/quickstart/spa/react). 

This sample demonstrates the following use cases:

- [Login](https://github.com/tarunpreetkaur02/tam-challenge/tree/main/src/components)
- [Logout](https://github.com/tarunpreetkaur02/tam-challenge/src/components/NavBar.js#L102-L108)
- [Showing the user profile](https://github.com/tarunpreetkaur02/tam-challenge/src/views/Profile.js)
- [Account Linking using actions](https://github.com/tarunpreetkaur02/tam-challenge/auth0-actions/post-login-action.js)

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

### Actions configuration
> - Follow this doc `https://auth0.com/docs/customize/actions/write-your-first-action` to create a Post Login action.
> - Use the code provided in the below link in the action created
`https://github.com/tarunpreetkaur02/tam-challenge/auth0-actions/post-login-action.js`


## Project setup
Download the react quick start from `https://auth0.com/docs/quickstart/spa/react/01-login`
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
