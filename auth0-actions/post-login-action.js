exports.onExecutePostLogin = async (event, api) => {

    if (event.user.email_verified !== true) { // Email is not verified -> DENY ACCESS
      console.log("Inside email_verified if");
      api.access.deny("Email Not Verified");
    }
  
  //let linkTheCurrentUserAsPrimary = true; // Change this to true if you want to test linking the logging in user as primary account
  let currentProvider = event.user.identities[0].provider;
  let currentUserID = event.user.identities[0].user_id;
  let providerFound = "";
  let userIDFound = "";

  // Creating a client to fetch user details for accountlinking
  const ManagementClient = require("auth0").ManagementClient;
  const management = new ManagementClient({
    clientId: event.secrets.clientId,
    clientSecret: event.secrets.clientSecret,
    domain: event.secrets.domain,
  });

  // Start main function, begin search for users
  const queryParams = {
    q: `email:${event.user.email}`,
    search_engine: 'v3',
  };
  const users = await management.users.getAll(queryParams);
  console.log("user", users);
  // Search for accounts with matching emails and required connection names
  if (users) {
    users.data.forEach(function (user) {
      // Grab the last user with the same email but a different user ID
      if (currentUserID !== user.identities[0].user_id && event.user.email === user.email) {
        providerFound = user.identities[0].provider;
        userIDFound = user.identities[0].user_id;
      }
    });

    if (userIDFound) {
      // Link accounts
      console.log(event.user.identities.length, "event.user.identities.length");
      console.log(event.user.email_verified, " event.user.email_verified");


      try {
        //NOT REQUIRED IF linkTheCurrentUserAsPrimary = true
        /* if (linkTheCurrentUserAsPrimary) {
             console.log("Inside if");
           console.log("linkTheCurrentUserAsPrimary", linkTheCurrentUserAsPrimary);
             await linkAccounts(currentProvider, currentUserID, providerFound, userIDFound);
         } else {*/
     
        await linkAccounts(providerFound, userIDFound, currentProvider, currentUserID);
        api.authentication.setPrimaryUser(providerFound + "|" + userIDFound);
        console.log("New primary user: " + providerFound + "|" + userIDFound)
        //   }
      }
      catch (error) {
        console.log("Error linking profiles ", error);
        return;
      };

      return;
    }

    // Both user search conditions not returned. Skip link code  
    console.log("No new user found, skipping link code");
    return;
  }
  // 
  // Account link function
  // 
  async function linkAccounts(primaryUserProvider, primaryUserID, secondaryUserProvider, secondaryUserID) {
    var params = { id: primaryUserProvider + "|" + primaryUserID };
    var data = {
      provider: secondaryUserProvider,
      user_id: secondaryUserID
    };
    await management.users.link(params, data);
  };
};