import { codeChallenge } from "../../utils/codeChallenge";

export const SPOTI_AUTH = {
  REDIRECT_URI: "http://localhost:5173",
  AUTH_URL: new URL("https://accounts.spotify.com/authorize"),
  TOKEN_ENDPOINT: "https://accounts.spotify.com/api/token",
  SCOPE: 'user-read-private user-read-email',
  RESPONSE_TYPE: "code",
  STATE: codeChallenge,
  SHOW_DIALOG: true, //default false, if true user have to approve the app again
  CODE_CHALLENGE_METHOD: "S256",
  GRANT_TYPE: 'authorization_code'
};