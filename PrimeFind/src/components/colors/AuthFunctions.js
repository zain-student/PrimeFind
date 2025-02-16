import * as SecureStore from "expo-secure-store";

// Save token
async function saveToken(token) {
  await SecureStore.setItemAsync("authToken", token);
}

// Get token
async function getToken() {
  return await SecureStore.getItemAsync("authToken");
}

// Delete token (on logout)
async function deleteToken() {
  await SecureStore.deleteItemAsync("authToken");
}
export { saveToken, getToken, deleteToken };
