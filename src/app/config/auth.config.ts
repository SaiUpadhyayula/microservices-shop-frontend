import { LogLevel, PassedInitialConfig } from 'angular-auth-oidc-client';

export const authConfig: PassedInitialConfig = {
  config: {
    authority: 'http://localhost:8181/realms/spring-microservices-security-realm',
    redirectUrl: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
    clientId: 'angular-client',
    scope: 'openid profile offline_access', // 'openid profile offline_access ' + your scopes
    responseType: 'code',
    silentRenew: true,
    useRefreshToken: true,
    ignoreNonceAfterRefresh: true, // this is required if the id_token is not returned
    triggerRefreshWhenIdTokenExpired: true, // required when refreshing the browser if id_token is not updated after the first authentication
    autoUserInfo: true, // if the user endpoint is not supported
    renewTimeBeforeTokenExpiresInSeconds: 30,
    logLevel: LogLevel.Debug,
  }
}
