import { SPOTI_AUTH } from "../src/constants/spotify-api";

const { REDIRECT_URI, GRANT_TYPE, TOKEN_ENDPOINT } = SPOTI_AUTH;

export const getToken = async ( code, setAccessToken ) => {
  const codeVerifier = sessionStorage.getItem('code_verifier')
  const payload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      client_id: import.meta.env.VITE_CLIENT_ID,
      grant_type: GRANT_TYPE,
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: codeVerifier,
    })
  }
  const body = await fetch(TOKEN_ENDPOINT, payload);
  const response = await body.json();

  sessionStorage.setItem('access_token', response.access_token);
  setAccessToken(response.access_token)
};
