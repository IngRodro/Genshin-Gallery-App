const storage = {
  getItem: (key: string) => {
    const value = window.localStorage.getItem(key);
    if (value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    } else {
      return null;
    }
  },
  setItem: (key: string, value: object | string) => {
    const newValue = typeof value === 'object' ? JSON.stringify(value) : value;
    window.localStorage.setItem(key, newValue);
  },
  removeItem: (key: string) => {
    window.localStorage.removeItem(key);
  },
};

export default storage;
