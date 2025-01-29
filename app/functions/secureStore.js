import * as SecureStore from 'expo-secure-store';

export function setSecureStore({key, value}) {
  try {
    SecureStore.setItem(key, value);
    return true;
  } catch (err) {
    console.log('Secure store error', err);
    return false;
  }
}

export function getSecureStore({key}) {
  try {
    const value = SecureStore.getItem(key);
    return value;
  } catch (err) {
    console.log('Secure store error', err);
    return false;
  }
}
export async function removeSecureSore({key}) {
  try {
    const value = await SecureStore.deleteItemAsync(key);
    return true;
  } catch (err) {
    console.log('Secure store error', err);
    return false;
  }
}
