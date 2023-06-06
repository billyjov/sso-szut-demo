// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  keycloak: {
    // Url of the Identity Provider
    issuer: 'https://keycloak.szut.dev/auth/',

    // Realm
    realm: 'szut',

    // The SPA's id.
    // The SPA is registerd with this id at the auth-serverß
    clientId: 'employee-management-service-frontend',
  },
};
