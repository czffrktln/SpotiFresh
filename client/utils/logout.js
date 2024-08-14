export const logout = () => {
  sessionStorage.removeItem("code_verifier")
  sessionStorage.removeItem("access_token")
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.delete('code');
};
