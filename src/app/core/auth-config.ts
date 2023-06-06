import { AuthConfig, OAuthStorage } from 'angular-oauth2-oidc';
import { AuthService } from './auth.service';

/**
 * Configuration for the OAuthService.
 */
export const authConfig: AuthConfig = {
  issuer: 'https://keycloak.szut.dev/auth/realms/szut',
  clientId: 'employee-management-service-frontend',
  responseType: 'code',
  redirectUri: window.location.origin + '/',
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  scope: 'openid profile email', // Ask offline_access to support refresh token refreshes
  useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
  silentRefreshTimeout: 5000, // For faster testing
  timeoutFactor: 0.25, // For faster testing
  sessionChecksEnabled: true,
  showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
  nonceStateSeparator: 'semicolon', // Real semicolon gets mangled by Duende ID Server's URI encoding
  // responseType: 'code',
  // redirectUri: window.location.origin + '/',
  // silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  // scope: 'openid profile email', // Ask offline_access to support refresh token refreshes
  // useSilentRefresh: true, // Needed for Code Flow to suggest using iframe-based refreshes
  // silentRefreshTimeout: 5000, // For faster testing
  // timeoutFactor: 0.25, // For faster testing
  // sessionChecksEnabled: true,
  // showDebugInformation: true, // Also requires enabling "Verbose" level in devtools
  // clearHashAfterLogin: false, // https://github.com/manfredsteyer/angular-oauth2-oidc/issues/457#issuecomment-431807040,
  // nonceStateSeparator: 'semicolon', // Real semicolon gets mangled by Duende ID Server's URI encoding
};


/**
 *  Storage location for tokens received from the authorization server.
 * @returns OAuthStorage
 */
export const storageFactory = (): OAuthStorage => localStorage;

export function authAppInitializerFactory(
  authService: AuthService
): () => Promise<void> {
  return () => authService.runInitialLoginSequence();
}
