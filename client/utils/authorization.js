import { SPOTI_AUTH } from "../src/constants/spotify-api";
import { codeChallenge, codeVerifier } from "./codeChallenge";

const { RESPONSE_TYPE, CODE_CHALLENGE_METHOD, REDIRECT_URI, AUTH_URL } = SPOTI_AUTH

export const authorization = () => {
  window.sessionStorage.setItem('code_verifier', codeVerifier);
  const params =  {
    response_type: RESPONSE_TYPE,
    client_id: import.meta.env.VITE_CLIENT_ID,
    // scope,
    code_challenge_method: CODE_CHALLENGE_METHOD,
    code_challenge: codeChallenge,
    redirect_uri: REDIRECT_URI,
    show_dialog: true
  }
  AUTH_URL.search = new URLSearchParams(params).toString();
  window.location.href = AUTH_URL.toString();
}