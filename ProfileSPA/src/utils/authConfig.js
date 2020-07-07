import { UserAgentApplication } from "msal";

// For a full list of msal.js configuration parameters, 
// visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
export const msalApp = new UserAgentApplication({
    auth: {
        clientId: "80e50f8c-8005-40dc-8cd5-873536e260a8",
        authority: "https://login.microsoftonline.com/0e764dbe-944c-4623-8539-52ba164e79bb",
        validateAuthority: true,
        redirectUri: "http://localhost:3000",
        navigateToLoginRequestUrl: false
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
    },
});

// Coordinates and required scopes for your web api
export const apiConfig = {
    resourceUri: "Enter the Web APIs base address, e.g. 'https://localhost:44351/api/profile'",
    resourceScope: "Enter the API scopes as declared in the app registration 'Expose an Api' blade in the form of 'api://{client_id}/.default'"
}

/** 
 * Scopes you enter here will be consented once you authenticate. For a full list of available authentication parameters, 
 * visit https://azuread.github.io/microsoft-authentication-library-for-js/docs/msal/modules/_authenticationparameters_.html
 */
export const loginRequest = {
    scopes: ["openid", "profile", "email"]
}

// Add here scopes for access token to be used at the API endpoints.
export const tokenRequest = {
    scopes: [apiConfig.resourceScope, "offline_access"]
}
