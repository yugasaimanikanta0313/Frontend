export const handleOAuthLogin = (provider) => {
  const API_BASE_URL = import.meta.env.VITE_API_URL;
const oauthUrl = `${API_BASE_URL}/oauth2/code/${provider}`;
  window.location.href = oauthUrl;
};
