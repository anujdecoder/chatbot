const DARK_MODE_KEY = 'AVA_APP_DARK_MODE';

export const getDarkModeValue = () => {
  const value = sessionStorage.getItem(DARK_MODE_KEY);
  if (!value) {
    return true;
  }
  return value === 'true';
};

export const setDarkModeValue = (val: boolean) => {
  sessionStorage.setItem(DARK_MODE_KEY, val.toString());
  return val;
};
